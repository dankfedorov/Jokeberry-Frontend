import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const TextToPdf = () => {
  const [text, setText] = useState('Введите ваш текст здесь');
  const canvasRef = useRef(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const generatePdf = () => {
    const input = canvasRef.current;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 210; // A4 size in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('text-to-pdf.pdf');
    });
  };

  return (
    <div>
      <div className='p-2 mb-2'
        ref={canvasRef}
        style={{
        //   width: '210mm',
        //   minHeight: '297mm',
          width: '100%',
          minHeight: '50mm',
          padding: '20px',
          outline: '1px solid #c2c2c2',
          borderRadius: '10px',
          backgroundColor: '#fff',
          color: '#000',
          fontSize: '16px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        {text}
      </div>

      <textarea
        className='p-2'
        value={text}
        onChange={handleTextChange}
        style={{ width: '100%', height: '100px', paddingTop: '20px' }}
      />

      <button className='btn' onClick={generatePdf} style={{ marginTop: '20px' }}>
        Скачать PDF
      </button>
    </div>
  );
};

export default TextToPdf;