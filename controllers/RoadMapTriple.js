const fs = require('fs');
const PDFDocument = require('pdfkit');
const convertir = require('numero-a-letras');

module.exports.PDFRoadmap = function(
  path,
  id,
  roadmap,
  logoPath,
  logoPathHD,
  signPath
) {
  return new Promise(resolve => {
	let endDate = new Date (roadmap.dateApproveRoadmap);
	let d = endDate.getDate();
	endDate.setMonth(endDate.getMonth() + + 6);
	if (endDate.getDate() != d) {
		date.setDate(0);
	  }
    const pdf = new PDFDocument({
      ownerPassword: 'Bud017//',
      permissions: {
        printing: 'highResolution'
      },
      info: {
        Title: 'Hojas de Ruta',
        Author: 'Ministerio de Mineria - Estadística y Tributaria'
      },
      size: 'Legal'
	});
	for(let i = 1; i <= roadmap.numberRoadmap; i++){
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
		
		pdf.fontSize(8).fillColor('red').font('Helvetica-Bold');
		pdf.text('ORIGINAL',286,25)
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('HOJA DE RUTA PARA TRANSPORTE DE ÁRIDOS',213,37)
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Decreto E N° 615/88',268,52)
		let number = (roadmap.requestRoadmap + '').padStart(6, '0');
		pdf.fontSize(8).fillColor('black').font('Helvetica');
		pdf.text(`Solicitud: ${number}`,422,25)
		pdf.fontSize(8).fillColor('black').font('Helvetica');
		pdf.text(`Fecha de emisión: ${roadmap.dateApproveRoadmap.toLocaleDateString('es-ES')}`,422,37)
		pdf.fontSize(8).fillColor('black').font('Helvetica');
		pdf.text(`Fecha de vencimiento: ${endDate.toLocaleDateString('es-ES')}`,422,49)
		pdf.fontSize(8).fillColor('black').font('Helvetica');
		pdf.text(`Hoja Nº ${i} de ${roadmap.numberRoadmap}`,422,61)
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Cantera:',40,80)
		pdf.fontSize(8).fillColor('black').font('Helvetica');
		pdf.text(`${roadmap.file.name}`,75,80)
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Ubicación:',40,100)
		pdf.fontSize(8).fillColor('black').font('Helvetica');
		pdf.text(`${roadmap.file.location}`,85,100)
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text(`Concesionario/Iniciador:`,40,120)
		pdf.fontSize(8).fillColor('black').font('Helvetica');
		pdf.text(`${roadmap.file.initiator}`,135,120)
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Transporte:',40,140)
		pdf.moveTo(87, 147)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
		.lineTo(285, 147)       // this is the end point the line
		.dash(1, { space: 2 }) // here we are formatting it to dash
		.stroke()
		let mineral = `${roadmap.file.extract[0]}`;
		for(let i = 1 ; i < roadmap.file.extract.length; i++){
			mineral = mineral + `, ${roadmap.file.extract[i]}`
		}
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Mineral:',40,160)
		pdf.fontSize(8).fillColor('black').font('Helvetica');
		pdf.text(`${mineral}`,72,160)
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Destinatario:',40,180)
		pdf.moveTo(93, 187)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
		.lineTo(285, 187)       // this is the end point the line
		.dash(1, { space: 2 }) // here we are formatting it to dash
		.stroke()

		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Expte:',300,80)
		pdf.fontSize(8).fillColor('black').font('Helvetica');
		pdf.text(`${roadmap.file.header}`,327,80)
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Departamento:',300,100)
		pdf.fontSize(8).fillColor('black').font('Helvetica');
		pdf.text(`${roadmap.file.department}`,360,100)
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Domicilio:',300,120)
		pdf.fontSize(8).fillColor('black').font('Helvetica');
		pdf.text(`${roadmap.file.propertyAddress}`,342,120)
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Patente:',300,140)
		pdf.moveTo(335, 147)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
		.lineTo(435, 147)       // this is the end point the line
		.dash(1, { space: 2 }) // here we are formatting it to dash
		.stroke()
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Fecha:',300,160)
		pdf.moveTo(330, 167)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
		.lineTo(435, 167)       // this is the end point the line
		.dash(1, { space: 2 }) // here we are formatting it to dash
		.stroke()
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Cantidad:',450,140)
		pdf.moveTo(490, 147)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
		.lineTo(580, 147)       // this is the end point the line
		.dash(1, { space: 2 }) // here we are formatting it to dash
		.stroke()
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Hora/Carga:',450,160)
		pdf.moveTo(500, 167)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
		.lineTo(580, 167)       // this is the end point the line
		.dash(1, { space: 2 }) // here we are formatting it to dash
		.stroke()
		pdf.image(logoPathHD, 40, 25, {
			fit: [75, 75]
		})
		pdf.moveTo(30, 210)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
		.lineTo(590, 210)       // this is the end point the line
		.dash(1, { space: 2 }) // here we are formatting it to dash
		.stroke()

		pdf.fontSize(6).fillColor('black').font('Helvetica-Bold');
		pdf.text('INDICACIONES:',40,220)
		pdf.fontSize(5).fillColor('black').font('Helvetica-Bold');
		pdf.text('ORIGINAL: Acompaña la carga, será intervenido por Policía Minera.',40,227)
		pdf.fontSize(5).fillColor('black').font('Helvetica-Bold');
		pdf.text('DUPLICADO: Acompaña el mineral transportado hasta su destino final.',40,234)
		pdf.fontSize(5).fillColor('black').font('Helvetica-Bold');
		pdf.text('TRIPLICADO: Este quedará en poder del concesionario, quien deberá remitir junto a las Planillas de Producción, dentro de los '+
		'diez (10) días del mes siguiente a la Dirección Provincial de Minería sito en calle Sarmiento N° 981 - SFV de Catamarca.',40,241)
		pdf.fontSize(5).fillColor('black').font('Helvetica');
		pdf.text('Provincia de Catamarca',420,310)
		pdf.fontSize(5).fillColor('black').font('Helvetica');
		pdf.text('DIRECTOR PROVINCIAL DE MINERÍA',400,300)
		pdf.fontSize(5).fillColor('black').font('Helvetica');
		pdf.text('ING. JUAN GUERRERO VELAZQUEZ',400,290)
		pdf.image(signPath, 400, 245, {
			fit: [97, 97]
		})
		pdf.fontSize(5).fillColor('black').font('Helvetica');
		pdf.text('FIRMA CONCESIONARIO',270,300)
		pdf.fontSize(5).fillColor('black').font('Helvetica');
		pdf.text('FIRMA Y FECHA POLICÍA MINERA',100,300)

		pdf.moveTo(30, 320)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
		.lineTo(590, 320)       // this is the end point the line
		.dash(1, { space: 2 }) // here we are formatting it to dash
		.stroke()

		pdf.fontSize(8).fillColor('red').font('Helvetica-Bold');
		pdf.text('DUPLICADO',286,335)
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('HOJA DE RUTA PARA TRANSPORTE DE ÁRIDOS',211,347)
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Decreto E N° 615/88',268,362)
		pdf.fontSize(8).fillColor('black').font('Helvetica');
		pdf.text(`Solicitud: ${number}`,422,335)
		pdf.fontSize(8).fillColor('black').font('Helvetica');
		pdf.text(`Fecha de emisión: ${roadmap.dateApproveRoadmap.toLocaleDateString('es-ES')}`,422,347)
		pdf.fontSize(8).fillColor('black').font('Helvetica');
		pdf.text(`Fecha de vencimiento: ${endDate.toLocaleDateString('es-ES')}`,422,359)
		pdf.fontSize(8).fillColor('black').font('Helvetica');
		pdf.text(`Hoja Nº ${i} de ${roadmap.numberRoadmap}`,422,371)
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Cantera:',40,390)
		pdf.fontSize(8).fillColor('black').font('Helvetica');
		pdf.text(`${roadmap.file.name}`,75,390)
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Ubicación:',40,410)
		pdf.fontSize(8).fillColor('black').font('Helvetica');
		pdf.text(`${roadmap.file.location}`,85,410)
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text(`Concesionario/Iniciador:`,40,430)
		pdf.fontSize(8).fillColor('black').font('Helvetica');
		pdf.text(`${roadmap.file.initiator}`,135,430)
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Transporte:',40,450)
		pdf.moveTo(87, 457)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
		.lineTo(285, 457)       // this is the end point the line
		.dash(1, { space: 2 }) // here we are formatting it to dash
		.stroke()
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Mineral:',40,470)
		pdf.fontSize(8).fillColor('black').font('Helvetica');
		pdf.text(`${mineral}`,72,470)
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Destinatario:',40,490)
		pdf.moveTo(93, 497)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
		.lineTo(285, 497)       // this is the end point the line
		.dash(1, { space: 2 }) // here we are formatting it to dash
		.stroke()

		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Expte:',300,390)
		pdf.fontSize(8).fillColor('black').font('Helvetica');
		pdf.text(`${roadmap.file.header}`,327,390)
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Departamento:',300,410)
		pdf.fontSize(8).fillColor('black').font('Helvetica');
		pdf.text(`${roadmap.file.department}`,360,410)
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Domicilio:',300,430)
		pdf.fontSize(8).fillColor('black').font('Helvetica');
		pdf.text(`${roadmap.file.propertyAddress}`,342,430)
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Patente:',300,450)
		pdf.moveTo(335, 457)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
		.lineTo(435, 457)       // this is the end point the line
		.dash(1, { space: 2 }) // here we are formatting it to dash
		.stroke()
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Fecha:',300,470)
		pdf.moveTo(330, 477)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
		.lineTo(435, 477)       // this is the end point the line
		.dash(1, { space: 2 }) // here we are formatting it to dash
		.stroke()

		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Cantidad:',450,450)
		pdf.moveTo(490, 457)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
		.lineTo(580, 457)       // this is the end point the line
		.dash(1, { space: 2 }) // here we are formatting it to dash
		.stroke()
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Hora/Carga:',450,470)
		pdf.moveTo(500, 477)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
		.lineTo(580, 477)       // this is the end point the line
		.dash(1, { space: 2 }) // here we are formatting it to dash
		.stroke()

		pdf.image(logoPathHD, 40, 335, {
			fit: [75, 75]
		})
		pdf.moveTo(30, 520)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
		.lineTo(590, 520)       // this is the end point the line
		.dash(1, { space: 2 }) // here we are formatting it to dash
		.stroke()

		pdf.fontSize(6).fillColor('black').font('Helvetica-Bold');
		pdf.text('INDICACIONES:',40,530)
		pdf.fontSize(5).fillColor('black').font('Helvetica-Bold');
		pdf.text('ORIGINAL: Acompaña la carga, será intervenido por Policía Minera.',40,538)
		pdf.fontSize(5).fillColor('black').font('Helvetica-Bold');
		pdf.text('DUPLICADO: Acompaña el mineral transportado hasta su destino final.',40,545)
		pdf.fontSize(5).fillColor('black').font('Helvetica-Bold');
		pdf.text('TRIPLICADO: Este quedará en poder del concesionario, quien deberá remitir junto a las Planillas de Producción, dentro de los '+
		'diez (10) días del mes siguiente a la Dirección Provincial de Minería sito en calle Sarmiento N° 981 - SFV de Catamarca.',40,553)
		pdf.fontSize(5).fillColor('black').font('Helvetica');
		pdf.text('Provincia de Catamarca',420,620)
		pdf.fontSize(5).fillColor('black').font('Helvetica');
		pdf.text('DIRECTOR PROVINCIAL DE MINERÍA',400,610)
		pdf.fontSize(5).fillColor('black').font('Helvetica');
		pdf.text('ING. JUAN GUERRERO VELAZQUEZ',400,600)
		pdf.image(signPath, 400, 555, {
			fit: [97, 97]
		})
		pdf.fontSize(5).fillColor('black').font('Helvetica');
		pdf.text('FIRMA CONCESIONARIO',270,610)
		pdf.fontSize(5).fillColor('black').font('Helvetica');
		pdf.text('FIRMA Y FECHA POLICÍA MINERA',100,610)

		pdf.moveTo(30, 630)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
		.lineTo(590, 630)       // this is the end point the line
		.dash(1, { space: 2 }) // here we are formatting it to dash
		.stroke()

		pdf.fontSize(8).fillColor('red').font('Helvetica-Bold');
		pdf.text('TRIPLICADO',283,645)
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('HOJA DE RUTA PARA TRANSPORTE DE ÁRIDOS',211,657)
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Decreto E N° 615/88',268,672)
		pdf.fontSize(8).fillColor('black').font('Helvetica');
		pdf.text(`Solicitud: ${number}`,422,645)
		pdf.fontSize(8).fillColor('black').font('Helvetica');
		pdf.text(`Fecha de emisión: ${roadmap.dateApproveRoadmap.toLocaleDateString('es-ES')}`,422,657)
		pdf.fontSize(8).fillColor('black').font('Helvetica');
		pdf.text(`Fecha de vencimiento: ${endDate.toLocaleDateString('es-ES')}`,422,669)
		pdf.fontSize(8).fillColor('black').font('Helvetica');
		pdf.text(`Hoja Nº ${i} de ${roadmap.numberRoadmap}`,422,681)
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Cantera:',40,700)
		pdf.fontSize(8).fillColor('black').font('Helvetica');
		pdf.text(`${roadmap.file.name}`,75,700)
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Ubicación:',40,720)
		pdf.fontSize(8).fillColor('black').font('Helvetica');
		pdf.text(`${roadmap.file.location}`,85,720)
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text(`Concesionario/Iniciador:`,40,740)
		pdf.fontSize(8).fillColor('black').font('Helvetica');
		pdf.text(`${roadmap.file.initiator}`,135,740)
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Transporte:',40,760)
		pdf.moveTo(87, 767)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
		.lineTo(285, 767)       // this is the end point the line
		.dash(1, { space: 2 }) // here we are formatting it to dash
		.stroke()
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Mineral:',40,780)
		pdf.fontSize(8).fillColor('black').font('Helvetica');
		pdf.text(`${mineral}`,72,780)
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Destinatario:',40,800)
		pdf.moveTo(93, 807)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
		.lineTo(285, 807)       // this is the end point the line
		.dash(1, { space: 2 }) // here we are formatting it to dash
		.stroke()

		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Expte:',300,700)
		pdf.fontSize(8).fillColor('black').font('Helvetica');
		pdf.text(`${roadmap.file.header}`,327,700)
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Departamento:',300,720)
		pdf.fontSize(8).fillColor('black').font('Helvetica');
		pdf.text(`${roadmap.file.department}`,360,720)
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Domicilio:',300,740)
		pdf.fontSize(8).fillColor('black').font('Helvetica');
		pdf.text(`${roadmap.file.propertyAddress}`,342,740)
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Patente:',300,760)
		pdf.moveTo(335, 767)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
		.lineTo(435, 767)       // this is the end point the line
		.dash(1, { space: 2 }) // here we are formatting it to dash
		.stroke()
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Fecha:',300,780)
		pdf.moveTo(330, 787)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
		.lineTo(435, 787)       // this is the end point the line
		.dash(1, { space: 2 }) // here we are formatting it to dash
		.stroke()

		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Cantidad:',450,760)
		pdf.moveTo(490, 767)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
		.lineTo(580, 767)       // this is the end point the line
		.dash(1, { space: 2 }) // here we are formatting it to dash
		.stroke()
		pdf.fontSize(8).fillColor('black').font('Helvetica-Bold');
		pdf.text('Hora/Carga:',450,780)
		pdf.moveTo(500, 787)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
		.lineTo(580, 787)       // this is the end point the line
		.dash(1, { space: 2 }) // here we are formatting it to dash
		.stroke()

		pdf.image(logoPathHD, 40, 645, {
			fit: [75, 75]
		})
		pdf.moveTo(30, 830)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
		.lineTo(590, 830)       // this is the end point the line
		.dash(1, { space: 2 }) // here we are formatting it to dash
		.stroke()

		pdf.fontSize(6).fillColor('black').font('Helvetica-Bold');
		pdf.text('INDICACIONES:',40,840)
		pdf.fontSize(5).fillColor('black').font('Helvetica-Bold');
		pdf.text('ORIGINAL: Acompaña la carga, será intervenido por Policía Minera.',40,848)
		pdf.fontSize(5).fillColor('black').font('Helvetica-Bold');
		pdf.text('DUPLICADO: Acompaña el mineral transportado hasta su destino final.',40,855)
		pdf.fontSize(5).fillColor('black').font('Helvetica-Bold');
		pdf.text('TRIPLICADO: Este quedará en poder del concesionario, quien deberá remitir junto a las Planillas de Producción, dentro de los '+
		'diez (10) días del mes siguiente a la Dirección Provincial de Minería sito en calle Sarmiento N° 981 - SFV de Catamarca.',40,862)
		pdf.fontSize(5).fillColor('black').font('Helvetica');
		pdf.text('Provincia de Catamarca',420,930)
		pdf.fontSize(5).fillColor('black').font('Helvetica');
		pdf.text('DIRECTOR PROVINCIAL DE MINERÍA',400,920)
		pdf.fontSize(5).fillColor('black').font('Helvetica');
		pdf.text('ING. JUAN GUERRERO VELAZQUEZ',400,910)
		pdf.image(signPath, 400, 865, {
			fit: [97, 97]
		})
		pdf.fontSize(5).fillColor('black').font('Helvetica');
		pdf.text('FIRMA CONCESIONARIO',270,920)
		pdf.fontSize(5).fillColor('black').font('Helvetica');
		pdf.text('FIRMA Y FECHA POLICÍA MINERA',100,920)
		pdf.moveTo(30, 940)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
		.lineTo(590, 940)       // this is the end point the line
		.dash(1, { space: 2 }) // here we are formatting it to dash
		.stroke()
		if(i < roadmap.numberRoadmap ){
			pdf.addPage();
		}else{
			pdf.pipe(fs.createWriteStream(`${path}/${id}.pdf`));
    		pdf.end();
		}
	}
    resolve(true);
  });
};
