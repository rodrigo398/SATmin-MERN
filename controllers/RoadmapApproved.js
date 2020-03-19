const fs = require('fs');
const PDFDocument = require('pdfkit');
const convertir = require('numero-a-letras');

module.exports.PDFApproved = function(
  path,
  id,
  requestRoadmap,
  roadmapAux,
  logoPath,
  logoPathHD
) {
  return new Promise(resolve => {
    const pdf = new PDFDocument({
      ownerPassword: 'Bud017//',
      permissions: {
        printing: 'highResolution'
      },
      info: {
        Title: 'Solicitud de Hoja de Ruta Aprobada',
        Author: 'Ministerio de Mineria - Estadística y Tributaria'
      }
    });
    pdf.image(logoPath, -30, 125, {
      fit: [100, 100]
    });
    pdf.image(logoPath, -30, 55, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 170, 125, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 170, 55, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 370, 125, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 370, 55, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 570, 125, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 570, 55, {
      fit: [100, 100]
    });

    pdf.image(logoPath, -30, 275, {
      fit: [100, 100]
    });
    pdf.image(logoPath, -30, 205, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 170, 275, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 170, 205, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 370, 275, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 370, 205, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 570, 275, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 570, 205, {
      fit: [100, 100]
    });

    pdf.image(logoPath, -30, 425, {
      fit: [100, 100]
    });
    pdf.image(logoPath, -30, 355, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 170, 425, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 170, 355, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 370, 425, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 370, 355, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 570, 425, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 570, 355, {
      fit: [100, 100]
    });

    pdf.image(logoPath, -30, 575, {
      fit: [100, 100]
    });
    pdf.image(logoPath, -30, 505, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 170, 575, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 170, 505, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 370, 575, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 370, 505, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 570, 575, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 570, 505, {
      fit: [100, 100]
    });

    pdf.image(logoPath, -30, 725, {
      fit: [100, 100]
    });
    pdf.image(logoPath, -30, 655, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 170, 725, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 170, 655, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 370, 725, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 370, 655, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 570, 725, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 570, 655, {
      fit: [100, 100]
    });

    pdf.image(logoPath, -30, 875, {
      fit: [100, 100]
    });
    pdf.image(logoPath, -30, 805, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 170, 875, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 170, 805, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 370, 875, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 370, 805, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 570, 875, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 570, 805, {
      fit: [100, 100]
    });

    pdf.image(logoPath, -30, 955, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 170, 955, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 370, 955, {
      fit: [100, 100]
    });
    pdf.image(logoPath, 570, 955, {
      fit: [100, 100]
    });
    ///
    pdf.image(logoPathHD, 40, 25, {
      fit: [75, 75]
    });
    pdf
      .fontSize(8)
      .fillColor('red')
      .font('Helvetica-Bold');
    pdf.text('ORIGINAL', 286, 25);
    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica-Bold');
    pdf.text('SOLICITUD DE HOJAS DE RUTA', 240, 37);
    pdf
      .fontSize(7)
      .fillColor('black')
      .font('Helvetica');
    let number = (requestRoadmap + '').padStart(6, '0');
    pdf.text(`Solicitud Nª:${number}`, 422, 25);
    pdf
      .fontSize(7)
      .fillColor('black')
      .font('Helvetica');
    pdf.text(
      `Fecha de solicitud: ${roadmapAux.dateRoadmap.toLocaleDateString(
        'es-ES'
      )}`,
      422,
      35
    );
    let hourAux = new Date(roadmapAux.dateRoadmap);
    pdf.text(
      `Hora: ${hourAux.getHours()}:${hourAux.getMinutes()}:${hourAux.getSeconds()}`,
      422,
      45
    );
    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica-Bold');
    pdf.text('DATOS ORGANISMO:', 40, 60);
    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica-Bold');
    pdf.text('Razón social:', 40, 75);
    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica');
    pdf.text('Ministerio de Minería Catamarca', 95, 75);
    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica-Bold');
    pdf.text('CUIT:', 40, 90);
    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica');
    pdf.text('30636511354', 63, 90);
    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica-Bold');
    pdf.text('Domicilio:', 40, 105);
    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica');
    pdf.text('Sarmiento 981', 80, 105);

    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica-Bold');
    pdf.text('DATOS CONTRIBUYENTE:', 300, 60);
    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica-Bold');
    pdf.text('Propiedad:', 300, 75);
    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica');
    pdf.text(`${roadmapAux.file.name}`, 345, 75);
    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica-Bold');
    pdf.text('Concesionario:', 300, 90);
    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica');
    pdf.text(`${roadmapAux.file.initiator}`, 360, 90);
    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica-Bold');
    pdf.text('Expediente:', 300, 105);
    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica');
    pdf.text(`${roadmapAux.file.header}`, 350, 105);
    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica-Bold');
    pdf.text('Tipo de Propiedad:', 300, 120);
    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica');
    pdf.text(`${roadmapAux.file.kind}`, 375, 120);
    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica-Bold');
    pdf.text('Pertenencias:', 300, 135);
    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica');
    pdf.text(`${roadmapAux.file.unity} HAS.`, 355, 135);

    pdf
      .fontSize(10)
      .fillColor('black')
      .font('Helvetica');
    let texto = convertir.NumerosALetras(roadmapAux.amountRoadmap);
    let mineral = `${roadmapAux.file.extract[0]}`;
    for (let i = 1; i < roadmapAux.file.extract.length; i++) {
      mineral = mineral + `, ${roadmapAux.file.extract[i]}`;
    }
    pdf.text(
      `El Sr./Sra. ${roadmapAux.user.name} perteneciente al concesionario` +
        ` "${roadmapAux.file.initiator}", propiedad "${roadmapAux.file.name}"` +
        ` ubicado en el departamento ${roadmapAux.file.department} de la provincia de Catamarca,` +
        ` solicita ${roadmapAux.numberRoadmap} hojas de ruta, por el valor de $${roadmapAux.amountRoadmap} (${texto}) para el transporte ` +
        `de: ${mineral}.-`,
      40,
      195
    );

    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica-Bold');
    pdf.text('DIRECCIÓN PROVINCIAL DE MINERÍA (DPM)', 40, 670);
    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica-Bold');
    pdf.text('TELÉFONO: 383 - 4437727 (Interno 104)', 40, 680);
    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica-Bold');
    pdf.text('DIRECCIÓN: Sarmineto 981 - SFV. de Catamarca', 40, 690);
    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica-Bold');
    pdf.text('CÓDIGO POSTAL: 4700', 40, 700);

    pdf.pipe(fs.createWriteStream(`${path}/${id}.pdf`));
    pdf.end();
    resolve(true);
  });
};
