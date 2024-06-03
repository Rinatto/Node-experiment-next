"use client"

import { useState, useEffect, useRef } from 'react';
import React from 'react';

export default function Home() {
  const [iterations, setIterations] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const canvasRef = useRef(null);

  const runExperiment = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/experiment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ iterations }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error running experiment:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (data && canvasRef.current) {
      const tsChanges = data.iterations.filter(result => result.label === 'test:ts').map(result => parseFloat(result.output.match(/TS Dynamic Structure Change: (\d+\.\d+)ms/)[1]));
      const jsChanges = data.iterations.filter(result => result.label === 'test:js').map(result => parseFloat(result.output.match(/Dynamic Structure Change: (\d+\.\d+)ms/)[1]));

      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      const maxValue = Math.max(...tsChanges, ...jsChanges);
      const padding = 40;
      const xScale = (canvasRef.current.width - 2 * padding) / tsChanges.length;
      const yScale = (canvasRef.current.height - 2 * padding) / maxValue;

      // Draw Y axis
      ctx.beginPath();
      ctx.moveTo(padding, padding);
      ctx.lineTo(padding, canvasRef.current.height - padding);
      ctx.strokeStyle = '#000';
      ctx.stroke();

      // Draw Y axis labels and grid lines
      const ySteps = 10;
      for (let i = 0; i <= ySteps; i++) {
        const y = padding + i * (canvasRef.current.height - 2 * padding) / ySteps;
        const yLabel = Math.round((maxValue / ySteps) * (ySteps - i));
        ctx.fillText(yLabel + ' ms', 0, y);
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(canvasRef.current.width - padding, y);
        ctx.strokeStyle = '#e0e0e0';
        ctx.stroke();
      }

      // Draw X axis
      ctx.strokeStyle = '#000';
      ctx.beginPath();
      ctx.moveTo(padding, canvasRef.current.height - padding);
      ctx.lineTo(canvasRef.current.width - padding, canvasRef.current.height - padding);
      ctx.stroke();

      // Draw X axis labels and grid lines
      for (let i = 0; i < tsChanges.length; i++) {
        const x = padding + i * xScale;
        ctx.fillText(i + 1, x, canvasRef.current.height - padding + 20);
        ctx.beginPath();
        ctx.moveTo(x, padding);
        ctx.lineTo(x, canvasRef.current.height - padding);
        ctx.strokeStyle = '#e0e0e0';
        ctx.stroke();
      }

      // Draw TS Dynamic Structure Change line
      ctx.strokeStyle = 'rgba(75, 192, 192, 1)';
      ctx.fillStyle = 'rgba(75, 192, 192, 1)';
      ctx.beginPath();
      tsChanges.forEach((value, index) => {
        const x = padding + index * xScale;
        const y = canvasRef.current.height - padding - value * yScale;
        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
        ctx.moveTo(x, y);
        ctx.arc(x, y, 3, 0, 2 * Math.PI);
      });
      ctx.stroke();
      ctx.fill();

      // Draw JS Dynamic Structure Change line
      ctx.strokeStyle = 'rgba(255, 99, 132, 1)';
      ctx.fillStyle = 'rgba(255, 99, 132, 1)';
      ctx.beginPath();
      jsChanges.forEach((value, index) => {
        const x = padding + index * xScale;
        const y = canvasRef.current.height - padding - value * yScale;
        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
        ctx.moveTo(x, y);
        ctx.arc(x, y, 3, 0, 2 * Math.PI);
      });
      ctx.stroke();
      ctx.fill();

      // Add legend
      ctx.fillStyle = 'rgba(75, 192, 192, 1)';
      ctx.fillRect(canvasRef.current.width - padding - 100, padding, 10, 10);
      ctx.fillStyle = '#000';
      ctx.fillText('TS Dynamic Structure Change', canvasRef.current.width - padding - 80, padding + 10);

      ctx.fillStyle = 'rgba(255, 99, 132, 1)';
      ctx.fillRect(canvasRef.current.width - padding - 100, padding + 20, 10, 10);
      ctx.fillStyle = '#000';
      ctx.fillText('JS Dynamic Structure Change', canvasRef.current.width - padding - 80, padding + 30);
    }
  }, [data]);

  return (
    <main>
        
            <h1>Экспериментальный стенд в среде Node.js</h1>
            <div className="experiment-info">
                <p>Данный эксперимент исследует различия в производительности между динамической типизацией в JavaScript и статической типизацией в TypeScript на примере создания и модификации объектов. 
                В эксперименте используются два сценария, каждый из которых создаёт 100,000 экземпляров класса Animal, добавляя каждому десятому объекту новое свойство newProperty.</p>
                <p>Цель эксперимента — сравнить производительность динамической типизации в JavaScript и статической типизации в TypeScript при операциях с большим количеством объектов. 

Ожидается, что TypeScript покажет лучшую производительность за счёт предварительной оптимизации структур данных движком V8, который лучше работает с известными и неизменяемыми структурами данных.
Данный эксперимент показывает, как различия в типизации могут влиять на производительность приложений, особенно в сценариях с интенсивной обработкой данных. 
</p>
            
            <label htmlFor="iterations">Введите количество итераций (не более 50)</label>
            <input
                id="iterations"
                type="number"
                value={iterations}
                onChange={(e) => setIterations(e.target.value)}
                min="1"
                max="10"
            />
            <button onClick={runExperiment} disabled={loading}>
                {loading ? 'Загрузка...' : 'Запустить эксперимент'}
            </button>
            {data ? (
                <div className="results">
                    <pre>{JSON.stringify(data.iterations, null, 2)}</pre>
                    <canvas ref={canvasRef} id="resultsChart" width="600" height="400"></canvas>
                </div>
            ) : (
                <p>Данных пока нет. Пожалуйста, проведите эксперимент.</p>
            )}
        </div>
    </main>
);
}