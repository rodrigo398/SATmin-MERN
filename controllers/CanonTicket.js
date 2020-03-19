const fs = require('fs');
const PDFDocument = require('pdfkit');
const convertir = require('numero-a-letras');

module.exports.PDFcanonTicket = function(
  path,
  id,
  canonAux,
  logoPath,
  logoPathHD,
  canonTicket,
  name
) {
  return new Promise(resolve => {
    const pdf = new PDFDocument({
      ownerPassword: 'Bud017//',
      permissions: {
        printing: 'highResolution'
      },
      info: {
        Title: 'Comprobante de pago de Canon Minero',
        Author:
          'Ministerio de Mineria - Departamento de Registro Gráfico y Fiscalización'
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
    pdf.text('LIQUIDACIÓN DE CANON MINERO', 240, 37);
    pdf
      .fontSize(7)
      .fillColor('black')
      .font('Helvetica');
    pdf.text(`Nª:${canonAux._id}`, 422, 25);
    pdf
      .fontSize(7)
      .fillColor('black')
      .font('Helvetica');
    pdf.text(
      `Fecha de emisión: ${canonAux.dateDisapprove.toLocaleDateString(
        'es-ES'
      )}`,
      422,
      35
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
    pdf.text(`${canonAux.file.name}`, 345, 75);
    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica-Bold');
    pdf.text('Concesionario:', 300, 90);
    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica');
    pdf.text(`${canonAux.file.initiator}`, 360, 90);
    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica-Bold');
    pdf.text('Expediente:', 300, 105);
    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica');
    pdf.text(`${canonAux.file.header}`, 350, 105);
    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica-Bold');
    pdf.text('Tipo de Propiedad:', 300, 120);
    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica');
    pdf.text(`${canonAux.file.kind}`, 375, 120);
    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica-Bold');
    pdf.text('Pertenencias:', 300, 135);
    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica');
    pdf.text(`${canonAux.file.unity} HAS.`, 355, 135);

    pdf
      .fontSize(10)
      .fillColor('black')
      .font('Helvetica');
    pdf.text(
      `Este documento es comprobante del pago nº: ${canonTicket.transaction},` +
        ` realizado el: ${canonTicket.datePayment.toLocaleDateString('es-ES')}, por el monto de $${canonTicket.payment} pesos,` +
        ` registrado por el usuario ${canonTicket.user.name} y aprobado por: ${name}` +
        ' en concepto de la solicitud de la liquidaciòn de canon' +
        ' de los periodos:',
      40,
      195
    );
    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica-Bold');
    pdf.text('AÑO', 40, 235);
    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica-Bold');
    pdf.text('SEMESTRE', 115, 235);
    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica-Bold');
    pdf.text('MULTA', 240, 235);
    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica-Bold');
    pdf.text('CANON', 330, 235);
    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica-Bold');
    pdf.text('SUBTOTAL', 420, 235);
    canonAux.description.sort((a, b) => (a.code > b.code ? 1 : -1));
    if (canonAux.description[0] != null) {
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`${canonAux.description[0].year}`, 40, 245);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`0${canonAux.description[0].period} Semestre`, 115, 245);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`$${canonAux.description[0].tax}`, 240, 245);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`$${canonAux.description[0].amount}`, 330, 245);
      let subTotal0 =
        canonAux.description[0].tax + canonAux.description[0].amount;
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`$${subTotal0}`, 420, 245);
    }
    if (canonAux.description[1] != null) {
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`${canonAux.description[1].year}`, 40, 255);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`0${canonAux.description[1].period} Semestre`, 115, 255);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`$${canonAux.description[1].tax}`, 240, 255);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`$${canonAux.description[1].amount}`, 330, 255);
      let subTotal1 =
        canonAux.description[1].tax + canonAux.description[1].amount;
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`$${subTotal1}`, 420, 255);
    }
    //
    if (canonAux.description[2] != null) {
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`${canonAux.description[2].year}`, 40, 265);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`0${canonAux.description[2].period} Semestre`, 115, 265);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`$${canonAux.description[2].tax}`, 240, 265);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`$${canonAux.description[2].amount}`, 330, 265);
      let subTotal2 =
        canonAux.description[2].tax + canonAux.description[2].amount;
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`$${subTotal2}`, 420, 265);
    }
    if (canonAux.description[3] != null) {
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`${canonAux.description[3].year}`, 40, 275);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`0${canonAux.description[3].period} Semestre`, 115, 275);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`$${canonAux.description[3].tax}`, 240, 275);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`$${canonAux.description[3].amount}`, 330, 275);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      let subTotal3 =
        canonAux.description[3].tax + canonAux.description[3].amount;
      pdf.text(`$${subTotal3}`, 420, 275);
    }
    if (canonAux.description[4] != null) {
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`${canonAux.description[4].year}`, 40, 285);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`0${canonAux.description[4].period} Semestre`, 115, 285);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`$${canonAux.description[4].tax}`, 240, 285);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`$${canonAux.description[4].amount}`, 330, 285);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      let subTotal4 =
        canonAux.description[4].tax + canonAux.description[4].amount;
      pdf.text(`$${subTotal4}`, 420, 285);
    }
    if (canonAux.description[5] != null) {
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`${canonAux.description[5].year}`, 40, 295);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`0${canonAux.description[5].period} Semestre`, 115, 295);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`$${canonAux.description[5].tax}`, 240, 295);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`$${canonAux.description[5].amount}`, 330, 295);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      let subTotal5 =
        canonAux.description[5].tax + canonAux.description[5].amount;
      pdf.text(`$${subTotal5}`, 420, 295);
    }
    if (canonAux.description[6] != null) {
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`${canonAux.description[6].year}`, 40, 305);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`0${canonAux.description[6].period} Semestre`, 115, 305);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`$${canonAux.description[6].tax}`, 240, 305);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`$${canonAux.description[6].amount}`, 330, 305);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      let subTotal6 =
        canonAux.description[6].tax + canonAux.description[6].amount;
      pdf.text(`$${subTotal6}`, 420, 305);
    }
    if (canonAux.description[7] != null) {
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`${canonAux.description[7].year}`, 40, 315);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`0${canonAux.description[7].period} Semestre`, 115, 315);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`$${canonAux.description[7].tax}`, 240, 315);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`$${canonAux.description[7].amount}`, 330, 315);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      let subTotal7 =
        canonAux.description[7].tax + canonAux.description[7].amount;
      pdf.text(`$${subTotal7}`, 420, 315);
    }
    if (canonAux.description[8] != null) {
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`${canonAux.description[8].year}`, 40, 325);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`0${canonAux.description[8].period} Semestre`, 115, 325);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`$${canonAux.description[8].tax}`, 240, 325);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`$${canonAux.description[8].amount}`, 330, 325);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      let subTotal8 =
        canonAux.description[8].tax + canonAux.description[8].amount;
      pdf.text(`$${subTotal8}`, 420, 325);
    }
    if (canonAux.description[9] != null) {
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`${canonAux.description[9].year}`, 40, 335);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`0${canonAux.description[9].period} Semestre`, 115, 335);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`$${canonAux.description[9].tax}`, 240, 335);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`$${canonAux.description[9].amount}`, 330, 335);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      let subTotal9 =
        canonAux.description[9].tax + canonAux.description[9].amount;
      pdf.text(`$${subTotal9}`, 420, 335);
    }
    if (canonAux.description[10] != null) {
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`${canonAux.description[10].year}`, 40, 345);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`0${canonAux.description[10].period} Semestre`, 115, 345);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`$${canonAux.description[10].tax}`, 240, 345);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`$${canonAux.description[10].amount}`, 330, 345);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      let subTotal10 =
        canonAux.description[10].tax + canonAux.description[10].amount;
      pdf.text(`$${subTotal10}`, 420, 345);
    }
    if (canonAux.description[11] != null) {
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`${canonAux.description[11].year}`, 40, 355);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`0${canonAux.description[11].period} Semestre`, 115, 355);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`$${canonAux.description[11].tax}`, 240, 355);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`$${canonAux.description[11].amount}`, 330, 355);
      pdf
        .fontSize(8)
        .fillColor('black')
        .font('Helvetica');
      let subTotal11 =
        canonAux.description[11].tax + canonAux.description[11].amount;
      pdf.text(`$${subTotal11}`, 420, 355);
    }
    pdf
      .fontSize(10)
      .fillColor('black')
      .font('Helvetica');
    let texto = convertir.NumerosALetras(canonAux.total);
    let dateRequest = new Date(canonAux.dateRequest);
    pdf.text(
      `Solicitud generada el ${dateRequest.toLocaleDateString('es-ES')} ` +
        ` por el usuario ${canonAux.user.name}  para el pago del monto` +
        ` $${canonAux.total} (${texto}).`,
      40,
      375
    );
    if (canonAux.comment != '') {
      pdf
        .fontSize(10)
        .fillColor('black')
        .font('Helvetica-Bold');
      pdf.text('Observaciones:', 40, 415);
      pdf
        .fontSize(10)
        .fillColor('black')
        .font('Helvetica');
      pdf.text(`${canonAux.comment}`, 40, 435);
    }
    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica-Bold');
    pdf.text('DIRECCIÓN PROVINCIAL DE MINERÍA (DPM)', 40, 670);
    pdf
      .fontSize(8)
      .fillColor('black')
      .font('Helvetica-Bold');
    pdf.text('TELÉFONO: 383 - 4437727 (Interno 124)', 40, 680);
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
