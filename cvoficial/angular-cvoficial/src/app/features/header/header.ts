import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CV } from '../../data/cvoficial-data';
import { ThemeService } from '../../core/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  cv = CV;
  isGeneratingPdf = false;

  constructor(public theme: ThemeService) {}

  async downloadMockPdf(): Promise<void> {
    this.isGeneratingPdf = true;
    try {
      const element = document.getElementById('cv-root');
      if (!element) throw new Error('No encontré el elemento #cv-root en el DOM.');

      const [{ jsPDF }, html2canvasModule] = await Promise.all([
        import('jspdf'),
        import('html2canvas')
      ]);

      const html2canvas = (html2canvasModule as any).default ?? html2canvasModule;

      const scale = 2;
      const canvas: HTMLCanvasElement = await html2canvas(element, {
        scale,
        useCORS: true,
        allowTaint: true,
        logging: false,
        backgroundColor: window.getComputedStyle(element).backgroundColor || '#ffffff'
      });

      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const imgProps = pdf.getImageProperties(imgData);
      const imgWidthPx = imgProps.width;
      const imgHeightPx = imgProps.height;

      const pdfWidth = pageWidth;
      const pdfHeight = (imgHeightPx * pdfWidth) / imgWidthPx;

      if (pdfHeight <= pageHeight) {
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      } else {
        const pxPerMm = imgHeightPx / pdfHeight;
        const pageHeightPx = Math.floor(pageHeight * pxPerMm);
        let remainingHeight = imgHeightPx;
        let position = 0;

        while (remainingHeight > 0) {
          const pageCanvas = document.createElement('canvas');
          pageCanvas.width = canvas.width;
          pageCanvas.height = Math.min(pageHeightPx, remainingHeight);
          const pageCtx = pageCanvas.getContext('2d')!;
          pageCtx.drawImage(
            canvas,
            0, position, canvas.width, pageCanvas.height,
            0, 0, pageCanvas.width, pageCanvas.height
          );
          const pageData = pageCanvas.toDataURL('image/png');
          const pageImgProps = pdf.getImageProperties(pageData);
          const pageImgHeightMm = (pageImgProps.height * pdfWidth) / pageImgProps.width;
          if (position > 0) pdf.addPage();
          pdf.addImage(pageData, 'PNG', 0, 0, pdfWidth, pageImgHeightMm);
          remainingHeight -= pageCanvas.height;
          position += pageCanvas.height;


      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth(); // mm
      const pageHeight = pdf.internal.pageSize.getHeight(); // mm

     
      const marginLeft = 10;
      const marginTop = 10;
      const usableWidth = pageWidth - marginLeft * 2;
      const usableHeight = pageHeight - marginTop * 2;

      
      const pxPerMm = 96 / 25.4;


      const canvasWpx = canvas.width;
      const canvasHpx = canvas.height;

      const imgWidthMm = usableWidth;
      
      const imgHeightMm = (canvasHpx / canvasWpx) * imgWidthMm;

     
      const pageHeightPx = Math.floor(usableHeight * pxPerMm);

      if (imgHeightMm <= usableHeight) {
       
        pdf.addImage(imgData, 'PNG', marginLeft, marginTop, imgWidthMm, imgHeightMm);
      } else {
     
        let yPosPx = 0;
        let pageIndex = 0;

        while (yPosPx < canvasHpx) {
          const sliceHeightPx = Math.min(pageHeightPx, canvasHpx - yPosPx);
          const pageCanvas = document.createElement('canvas');
          pageCanvas.width = canvasWpx;
          pageCanvas.height = sliceHeightPx;
          const ctx = pageCanvas.getContext('2d')!;
          ctx.drawImage(canvas, 0, yPosPx, canvasWpx, sliceHeightPx, 0, 0, canvasWpx, sliceHeightPx);

          const pageData = pageCanvas.toDataURL('image/png');
          
          const pageImgHeightMm = (sliceHeightPx / canvasWpx) * imgWidthMm;

          if (pageIndex > 0) pdf.addPage();
          pdf.addImage(pageData, 'PNG', marginLeft, marginTop, imgWidthMm, pageImgHeightMm);

          yPosPx += sliceHeightPx;
          pageIndex++;

        }
      }

      pdf.save('CV-Jimena-Estrada.pdf');
    } catch (err) {
      console.error('Error generando PDF:', err);
      try { window.print(); } catch (e) { console.error(e); }
    } finally {
      this.isGeneratingPdf = false;
    }
  }
}