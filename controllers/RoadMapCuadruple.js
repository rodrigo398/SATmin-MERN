const fs = require('fs');
const PDFDocument = require('pdfkit');

module.exports.PDFRoadmap = function(
  path,
  id,
  roadmap,
  logoPath,
  signPath
) {
  return new Promise(resolve => {
	let endDate = new Date (roadmap.dateApproveRoadmap);
    let d = endDate.getDate();
    let mineral = `${roadmap.file.extract[0]}`;
		for(let i = 1 ; i < roadmap.file.extract.length; i++){
			mineral = mineral + `, ${roadmap.file.extract[i]}`
		}
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
        pdf.rect(420, 887, 120, 20)
        .fill('pink')
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
		let endDate = new Date (roadmap.dateApproveRoadmap);
	    endDate.setMonth(endDate.getMonth() + + 6);
        let number = (roadmap.requestRoadmap + '').padStart(6, '0');
        pdf.rect(420, 435, 120, 20)
        .dash(1, { space: 0 }) // here we are formatting it to dash
        .stroke()
        pdf.fontSize(10).fillColor('red').font('Helvetica-Bold');
        pdf.text('HOJA DE RUTA PARA TRANSPORTE DE MINERAL',{
        align:'center'
        })
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text('ORIGINAL',456,440)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text('DUPLICADO',452,892)
        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Decreto E N° 615/88',260,85)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text(`Solicitud Nº: ${number}`,422,35)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text(`Hoja ${i} de ${roadmap.numberRoadmap}`,422,49)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text('PODER EJECUTIVO',40,35)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text('MINISTERIO DE MINERÍA DE CATAMARCA',40,49)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text('DIRECCIÓN DE MINERÍA',40,63)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text('POLICÍA MINERA',40,76)

        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Mina o Cantera:',40,120)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text(`${roadmap.file.name}`,120,120)
        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Departamento:',40,140)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text(`${roadmap.file.department}`,115,140)
        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Registrador o Concesionario:',40,160)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text(`${roadmap.file.initiator}`,185,160)
        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Domicilio:',40,180)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text(`${roadmap.file.propertyAddress}`,93,180)
        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Mineral:',40,200)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text(`${mineral}`,83,200)
        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Destino:',40,220)
        pdf.moveTo(83, 228)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(385, 228)       // this is the end point the line
        .dash(1, { space: 2 }) // here we are formatting it to dash
        .stroke()
        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Remitente:',40,240)
        pdf.moveTo(96, 248)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(385, 248)       // this is the end point the line
        .dash(1, { space: 2 }) // here we are formatting it to dash
        .stroke()
        pdf.text('Medio de Transporte:',40,260)
        pdf.moveTo(146, 268)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(385, 268)       // this is the end point the line
        .dash(1, { space: 2 }) // here we are formatting it to dash
        .stroke()
        pdf.text('Estación o lugar de carga:',40,280)
        pdf.moveTo(172, 288)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(385, 288)       // this is the end point the line
        .dash(1, { space: 2 }) // here we are formatting it to dash
        .stroke()
        pdf.text('Cantidad:',40,300)
        pdf.moveTo(92, 308)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(185, 308)       // this is the end point the line
        .dash(1, { space: 2 }) // here we are formatting it to dash
        .stroke()
        pdf.text('Destinatario:',40,320)
        pdf.moveTo(107, 328)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(385, 328)       // this is the end point the line
        .dash(1, { space: 2 }) // here we are formatting it to dash
        .stroke()
        pdf.text('N° Patente:',340,300)
        pdf.moveTo(398, 308)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(485, 308)       // this is the end point the line
        .dash(1, { space: 2 }) // here we are formatting it to dash
        .stroke()
        pdf.fontSize(9).fillColor('black').font('Helvetica');
        pdf.text('Autoridad Policial - Fecha',65,380)
        pdf.moveTo(40, 372)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(200, 372)       // this is the end point the line
        .dash(1, { space: 0 }) // here we are formatting it to dash
        .stroke()
        pdf.fontSize(9).fillColor('black').font('Helvetica');
        pdf.text('Fecha y Firma Remitente',250,380)
        pdf.moveTo(220, 372)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(380, 372)       // this is the end point the line
        .dash(1, { space: 0 }) // here we are formatting it to dash
        .stroke()
        pdf.image(signPath, 450, 320, {
        fit: [120, 120]
        })
        pdf.fontSize(9).fillColor('black').font('Helvetica');
        pdf.text('Firma de la Autoridad',450,380)
        pdf.fontSize(5).fillColor('black').font('Helvetica');
        pdf.text('ING. JUAN GUERRERO VELAZQUEZ',451,390)
        pdf.text('DIRECTOR PROVINCIAL DE MINERÌA',451,400)
        pdf.moveTo(420, 372)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(580, 372)       // this is the end point the line
        .dash(1, { space: 0 }) // here we are formatting it to dash
        .stroke()
        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Expte:',340,120)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text(`${roadmap.file.header}`,374,120)
        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Vigencia:',340,140)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text(`${roadmap.dateApproveRoadmap.toLocaleDateString('es-ES')} al ${endDate.toLocaleDateString('es-ES')}`,388,140)
        pdf.fontSize(8).fillColor('black').font('Helvetica');
        pdf.text('INDICACIONES:',40,400)
        pdf.fontSize(8).fillColor('black').font('Helvetica');
        pdf.text('ORIGINAL (BLANCO): Quedará en poder'+
        ' de la Autoridad Policial que visa la Hoja de ruta '+
        'quien deberá remitir dentro de las 48hs de recibida'+
        ' a la Dirección de Minería. Calle Sarmiento N° 981'+
        ' - San Fernando del Valle de Catamarca.',40,410)
        pdf.fontSize(8).fillColor('black').font('Helvetica');
        pdf.text('DUPLICADO (ROSADO): Acompañará al mineral'+
        ' que se transporta. ',40,430)
        pdf.fontSize(8).fillColor('black').font('Helvetica');
        pdf.text('TRIPLICADO (AMARILLO): Quedará como'+
        ' constancia al Productor Minero. ',40,440)
        pdf.fontSize(8).fillColor('black').font('Helvetica');
        pdf.text('CUADRIPLICADO (CELESTE): Acompañará'+
        ' la carga cuando la misma salga de la Provincia. ',40,450)
        pdf.moveTo(30, 465)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(590, 465)       // this is the end point the line
        .dash(1, { space: 1 }) // here we are formatting it to dash
        .stroke()

        pdf.fontSize(10).fillColor('red').font('Helvetica-Bold');
        pdf.text('HOJA DE RUTA PARA TRANSPORTE DE MINERAL',186,515)
        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Decreto E N° 615/88',260,530)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text(`Solicitud Nº: ${number}`,422,475)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text(`Hoja ${i} de ${roadmap.numberRoadmap}`,422,489)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text('PODER EJECUTIVO',40,475)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text('MINISTERIO DE MINERÍA DE CATAMARCA',40,489)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text('DIRECCIÓN DE MINERÍA',40,503)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text('POLICÍA MINERA',40,516)

        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Mina o Cantera:',40,570)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text(`${roadmap.file.name}`,120,570)
        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Departamento:',40,590)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text(`${roadmap.file.department}`,115,590)
        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Registrador o Concesionario:',40,610)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text(`${roadmap.file.initiator}`,185,610)
        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Domicilio:',40,630)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text(`${roadmap.file.propertyAddress}`,93,630)
        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Mineral:',40,650)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text(`${mineral}`,83,650)
        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Destino:',40,670)
        pdf.moveTo(83, 678)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(385, 678)       // this is the end point the line
        .dash(1, { space: 2 }) // here we are formatting it to dash
        .stroke()
        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Remitente:',40,690)
        pdf.moveTo(96, 698)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(385, 698)       // this is the end point the line
        .dash(1, { space: 2 }) // here we are formatting it to dash
        .stroke()
        pdf.text('Medio de Transporte:',40,710)
        pdf.moveTo(146, 718)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(385, 718)       // this is the end point the line
        .dash(1, { space: 2 }) // here we are formatting it to dash
        .stroke()
        pdf.text('Estación o lugar de carga:',40,730)
        pdf.moveTo(172, 738)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(385, 738)       // this is the end point the line
        .dash(1, { space: 2 }) // here we are formatting it to dash
        .stroke()
        pdf.text('Cantidad:',40,750)
        pdf.moveTo(92, 758)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(185, 758)       // this is the end point the line
        .dash(1, { space: 2 }) // here we are formatting it to dash
        .stroke()
        pdf.text('Destinatario:',40,770)
        pdf.moveTo(107, 778)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(385, 778)       // this is the end point the line
        .dash(1, { space: 2 }) // here we are formatting it to dash
        .stroke()
        pdf.text('N° Patente:',340,750)
        pdf.moveTo(398, 758)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(485, 758)       // this is the end point the line
        .dash(1, { space: 2 }) // here we are formatting it to dash
        .stroke()
        pdf.fontSize(9).fillColor('black').font('Helvetica');
        pdf.text('Autoridad Policial - Fecha',65,830)
        pdf.moveTo(40, 825)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(200, 825)       // this is the end point the line
        .dash(1, { space: 0 }) // here we are formatting it to dash
        .stroke()
        pdf.fontSize(9).fillColor('black').font('Helvetica');
        pdf.text('Fecha y Firma Remitente',250,830)
        pdf.moveTo(220, 825)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(380, 825)       // this is the end point the line
        .dash(1, { space: 0 }) // here we are formatting it to dash
        .stroke()
        pdf.image(signPath, 450, 770, {
        fit: [120, 120]
        })
        pdf.fontSize(9).fillColor('black').font('Helvetica');
        pdf.text('Firma de la Autoridad',450,830)
        pdf.fontSize(5).fillColor('black').font('Helvetica');
        pdf.text('ING. JUAN GUERRERO VELAZQUEZ',451,840)
        pdf.text('DIRECTOR PROVINCIAL DE MINERÌA',451,850)
        pdf.moveTo(420, 825)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(580, 825)       // this is the end point the line
        .dash(1, { space: 0 }) // here we are formatting it to dash
        .stroke()
        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Expte:',340,570)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text(`${roadmap.file.header}`,374,570)
        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Vigencia:',340,590)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text(`${roadmap.dateApproveRoadmap.toLocaleDateString('es-ES')} al ${endDate.toLocaleDateString('es-ES')}`,388,590)
        pdf.fontSize(8).fillColor('black').font('Helvetica');
        pdf.text('INDICACIONES:',40,850)
        pdf.fontSize(8).fillColor('black').font('Helvetica');
        pdf.text('ORIGINAL (BLANCO): Quedará en poder'+
        ' de la Autoridad Policial que visa la Hoja de ruta '+
        'quien deberá remitir dentro de las 48hs de recibida'+
        ' a la Dirección de Minería. Calle Sarmiento N° 981'+
        ' - San Fernando del Valle de Catamarca.',40,860)
        pdf.fontSize(8).fillColor('black').font('Helvetica');
        pdf.text('DUPLICADO (ROSADO): Acompañará al mineral'+
        ' que se transporta. ',40,880)
        pdf.fontSize(8).fillColor('black').font('Helvetica');
        pdf.text('TRIPLICADO (AMARILLO): Quedará como'+
        ' constancia al Productor Minero. ',40,890)
        pdf.fontSize(8).fillColor('black').font('Helvetica');
        pdf.text('CUADRIPLICADO (CELESTE): Acompañará'+
        ' la carga cuando la misma salga de la Provincia. ',40,900)
        pdf.addPage()
        pdf.rect(420, 435, 120, 20)
        .fill('yellow')
        pdf.rect(420, 887, 120, 20)
        .fill('#7ee0ff')

        //Imagenes segunda hoja
        pdf.image(logoPath, -30, 125, {
            fit: [100, 100]
        })
        pdf.image(logoPath, -30, 55, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 170, 125, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 170, 55, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 370, 125, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 370, 55, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 570, 125, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 570, 55, {
            fit: [100, 100]
        })

        pdf.image(logoPath, -30, 275, {
            fit: [100, 100]
        })
        pdf.image(logoPath, -30, 205, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 170, 275, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 170, 205, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 370, 275, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 370, 205, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 570, 275, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 570, 205, {
            fit: [100, 100]
        })

        pdf.image(logoPath, -30, 425, {
            fit: [100, 100]
        })
        pdf.image(logoPath, -30, 355, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 170, 425, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 170, 355, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 370, 425, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 370, 355, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 570, 425, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 570, 355, {
            fit: [100, 100]
        })

        pdf.image(logoPath, -30, 575, {
            fit: [100, 100]
        })
        pdf.image(logoPath, -30, 505, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 170, 575, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 170, 505, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 370, 575, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 370, 505, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 570, 575, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 570, 505, {
            fit: [100, 100]
        })

        pdf.image(logoPath, -30, 725, {
            fit: [100, 100]
        })
        pdf.image(logoPath, -30, 655, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 170, 725, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 170, 655, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 370, 725, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 370, 655, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 570, 725, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 570, 655, {
            fit: [100, 100]
        })

        pdf.image(logoPath, -30, 875, {
            fit: [100, 100]
        })
        pdf.image(logoPath, -30, 805, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 170, 875, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 170, 805, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 370, 875, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 370, 805, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 570, 875, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 570, 805, {
            fit: [100, 100]
        })

        pdf.image(logoPath, -30, 955, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 170, 955, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 370, 955, {
            fit: [100, 100]
        })
        pdf.image(logoPath, 570, 955, {
            fit: [100, 100]
        })

        pdf.fontSize(10).fillColor('red').font('Helvetica-Bold');
        pdf.text('HOJA DE RUTA PARA TRANSPORTE DE MINERAL',{
        align:'center'
        })
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text('TRIPLICADO',450,441)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text('CUADRIPLICADO',440,892)
        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Decreto E N° 615/88',260,85)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text(`Solicitud Nº: ${number}`,422,35)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text(`Hoja ${i} de ${roadmap.numberRoadmap}`,422,49)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text('PODER EJECUTIVO',40,35)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text('MINISTERIO DE MINERÍA DE CATAMARCA',40,49)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text('DIRECCIÓN DE MINERÍA',40,63)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text('POLICÍA MINERA',40,76)

        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Mina o Cantera:',40,120)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text(`${roadmap.file.name}`,120,120)
        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Departamento:',40,140)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text(`${roadmap.file.department}`,115,140)
        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Registrador o Concesionario:',40,160)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text(`${roadmap.file.initiator}`,185,160)
        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Domicilio:',40,180)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text(`${roadmap.file.propertyAddress}`,93,180)
        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Mineral:',40,200)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text(`${mineral}`,83,200)
        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Destino:',40,220)
        pdf.moveTo(83, 228)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(385, 228)       // this is the end point the line
        .dash(1, { space: 2 }) // here we are formatting it to dash
        .stroke()
        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Remitente:',40,240)
        pdf.moveTo(96, 248)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(385, 248)       // this is the end point the line
        .dash(1, { space: 2 }) // here we are formatting it to dash
        .stroke()
        pdf.text('Medio de Transporte:',40,260)
        pdf.moveTo(146, 268)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(385, 268)       // this is the end point the line
        .dash(1, { space: 2 }) // here we are formatting it to dash
        .stroke()
        pdf.text('Estación o lugar de carga:',40,280)
        pdf.moveTo(172, 288)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(385, 288)       // this is the end point the line
        .dash(1, { space: 2 }) // here we are formatting it to dash
        .stroke()
        pdf.text('Cantidad:',40,300)
        pdf.moveTo(92, 308)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(185, 308)       // this is the end point the line
        .dash(1, { space: 2 }) // here we are formatting it to dash
        .stroke()
        pdf.text('Destinatario:',40,320)
        pdf.moveTo(107, 328)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(385, 328)       // this is the end point the line
        .dash(1, { space: 2 }) // here we are formatting it to dash
        .stroke()
        pdf.text('N° Patente:',340,300)
        pdf.moveTo(398, 308)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(485, 308)       // this is the end point the line
        .dash(1, { space: 2 }) // here we are formatting it to dash
        .stroke()
        pdf.fontSize(9).fillColor('black').font('Helvetica');
        pdf.text('Autoridad Policial - Fecha',65,380)
        pdf.moveTo(40, 372)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(200, 372)       // this is the end point the line
        .dash(1, { space: 0 }) // here we are formatting it to dash
        .stroke()
        pdf.fontSize(9).fillColor('black').font('Helvetica');
        pdf.text('Fecha y Firma Remitente',250,380)
        pdf.moveTo(220, 372)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(380, 372)       // this is the end point the line
        .dash(1, { space: 0 }) // here we are formatting it to dash
        .stroke()
        pdf.image(signPath, 450, 320, {
        fit: [120, 120]
        })
        pdf.fontSize(9).fillColor('black').font('Helvetica');
        pdf.text('Firma de la Autoridad',450,380)
        pdf.fontSize(5).fillColor('black').font('Helvetica');
        pdf.text('ING. JUAN GUERRERO VELAZQUEZ',451,390)
        pdf.text('DIRECTOR PROVINCIAL DE MINERÌA',451,400)
        pdf.moveTo(420, 372)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(580, 372)       // this is the end point the line
        .dash(1, { space: 0 }) // here we are formatting it to dash
        .stroke()
        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Expte:',340,120)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text(`${roadmap.file.header}`,374,120)
        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Vigencia:',340,140)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text(`${roadmap.dateApproveRoadmap.toLocaleDateString('es-ES')} al ${endDate.toLocaleDateString('es-ES')}`,388,140)
        pdf.fontSize(8).fillColor('black').font('Helvetica');
        pdf.text('INDICACIONES:',40,400)
        pdf.fontSize(8).fillColor('black').font('Helvetica');
        pdf.text('ORIGINAL (BLANCO): Quedará en poder'+
        ' de la Autoridad Policial que visa la Hoja de ruta '+
        'quien deberá remitir dentro de las 48hs de recibida'+
        'a la Dirección de Minería. Calle Sarmiento N° 981'+
        ' - San Fernando del Valle de Catamarca.',40,410)
        pdf.fontSize(8).fillColor('black').font('Helvetica');
        pdf.text('DUPLICADO (ROSADO): Acompañará al mineral'+
        ' que se transporta. ',40,430)
        pdf.fontSize(8).fillColor('black').font('Helvetica');
        pdf.text('TRIPLICADO (AMARILLO): Quedará como'+
        ' constancia al Productor Minero. ',40,440)
        pdf.fontSize(8).fillColor('black').font('Helvetica');
        pdf.text('CUADRIPLICADO (CELESTE): Acompañará'+
        ' la carga cuando la misma salga de la Provincia. ',40,450)
        pdf.moveTo(30, 465)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(590, 465)       // this is the end point the line
        .dash(1, { space: 1 }) // here we are formatting it to dash
        .stroke()

        pdf.fontSize(10).fillColor('red').font('Helvetica-Bold');
        pdf.text('HOJA DE RUTA PARA TRANSPORTE DE MINERAL',186,515)
        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Decreto E N° 615/88',260,530)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text(`Solicitud Nº: ${number}`,422,475)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text(`Hoja ${i} de ${roadmap.numberRoadmap}`,422,489)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text('PODER EJECUTIVO',40,475)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text('MINISTERIO DE MINEDÍA DE CATAMARCA',40,489)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text('DIRECCIÓN DE MINERÍA',40,503)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text('POLICÍA MINERA',40,516)

        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Mina o Cantera:',40,570)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text(`${roadmap.file.name}`,120,570)
        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Departamento:',40,590)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text(`${roadmap.file.department}`,115,590)
        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Registrador o Concesionario:',40,610)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text(`${roadmap.file.initiator}`,185,610)
        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Domicilio:',40,630)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text(`${roadmap.file.propertyAddress}`,93,630)
        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Mineral:',40,650)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text(`${mineral}`,83,650)
        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Destino:',40,670)
        pdf.moveTo(83, 678)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(385, 678)       // this is the end point the line
        .dash(1, { space: 2 }) // here we are formatting it to dash
        .stroke()
        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Remitente:',40,690)
        pdf.moveTo(96, 698)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(385, 698)       // this is the end point the line
        .dash(1, { space: 2 }) // here we are formatting it to dash
        .stroke()
        pdf.text('Medio de Transporte:',40,710)
        pdf.moveTo(146, 718)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(385, 718)       // this is the end point the line
        .dash(1, { space: 2 }) // here we are formatting it to dash
        .stroke()
        pdf.text('Estación o lugar de carga:',40,730)
        pdf.moveTo(172, 738)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(385, 738)       // this is the end point the line
        .dash(1, { space: 2 }) // here we are formatting it to dash
        .stroke()
        pdf.text('Cantidad:',40,750)
        pdf.moveTo(92, 758)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(185, 758)       // this is the end point the line
        .dash(1, { space: 2 }) // here we are formatting it to dash
        .stroke()
        pdf.text('Destinatario:',40,770)
        pdf.moveTo(107, 778)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(385, 778)       // this is the end point the line
        .dash(1, { space: 2 }) // here we are formatting it to dash
        .stroke()
        pdf.text('N° Patente:',340,750)
        pdf.moveTo(398, 758)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(485, 758)       // this is the end point the line
        .dash(1, { space: 2 }) // here we are formatting it to dash
        .stroke()
        pdf.fontSize(9).fillColor('black').font('Helvetica');
        pdf.text('Autoridad Policial - Fecha',65,830)
        pdf.moveTo(40, 825)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(200, 825)       // this is the end point the line
        .dash(1, { space: 0 }) // here we are formatting it to dash
        .stroke()
        pdf.fontSize(9).fillColor('black').font('Helvetica');
        pdf.text('Fecha y Firma Remitente',250,830)
        pdf.moveTo(220, 825)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(380, 825)       // this is the end point the line
        .dash(1, { space: 0 }) // here we are formatting it to dash
        .stroke()
        pdf.image(signPath, 450, 770, {
            fit: [120, 120]
        })
        pdf.fontSize(9).fillColor('black').font('Helvetica');
        pdf.text('Firma de la Autoridad',450,830)
        pdf.fontSize(5).fillColor('black').font('Helvetica');
        pdf.text('ING. JUAN GUERRERO VELAZQUEZ',451,840)
        pdf.text('DIRECTOR PROVINCIAL DE MINERÌA',451,850)
        pdf.moveTo(420, 825)       // this is your starting position of the line, from the left side of the screen 200 and from top 200
        .lineTo(580, 825)       // this is the end point the line
        .dash(1, { space: 0 }) // here we are formatting it to dash
        .stroke()
        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Expte:',340,570)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text(`${roadmap.file.header}`,374,570)
        pdf.fontSize(10).fillColor('black').font('Helvetica-Bold');
        pdf.text('Vigencia:',340,590)
        pdf.fontSize(10).fillColor('black').font('Helvetica');
        pdf.text(`${roadmap.dateApproveRoadmap.toLocaleDateString('es-ES')} al ${endDate.toLocaleDateString('es-ES')}`,388,590)
        pdf.fontSize(8).fillColor('black').font('Helvetica');
        pdf.text('INDICACIONES:',40,850)
        pdf.fontSize(8).fillColor('black').font('Helvetica');
        pdf.text('ORIGINAL (BLANCO): Quedará en poder'+
        ' de la Autoridad Policial que visa la Hoja de ruta '+
        'quien deberá remitir dentro de las 48hs de recibida'+
        'a la Dirección de Minería. Calle Sarmiento N° 981'+
        ' - San Fernando del Valle de Catamarca.',40,860)
        pdf.fontSize(8).fillColor('black').font('Helvetica');
        pdf.text('DUPLICADO (ROSADO): Acompañará al mineral'+
        ' que se transporta. ',40,880)
        pdf.fontSize(8).fillColor('black').font('Helvetica');
        pdf.text('TRIPLICADO (AMARILLO): Quedará como'+
        ' constancia al Productor Minero. ',40,890)
        pdf.fontSize(8).fillColor('black').font('Helvetica');
        pdf.text('CUADRIPLICADO (CELESTE): Acompañará'+
        ' la carga cuando la misma salga de la Provincia. ',40,900)
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
