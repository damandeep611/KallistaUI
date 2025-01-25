import p5 from "p5";
import { useEffect, useRef } from "react";
export default function EyeFollowingCursor() {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sketchRef.current) return;
    const sketch = (p: p5) => {
      let eyeLeft: p5.Vector;
      let eyeRight: p5.Vector;

      p.setup = () => {
        p.createCanvas(300, 300);
        eyeLeft = p.createVector(p.width * 0.3, p.height / 2);
        eyeRight = p.createVector(p.width * 0.7, p.height / 2);
      };

      p.draw = () => {
        p.background(220);
        drawEye(eyeLeft);
        drawEye(eyeRight);
      };
      const drawEye = (position: p5.Vector) => {
        p.push();
        p.translate(position.x, position.y);

        //drawig the eye
        p.fill(255);
        p.ellipse(0, 0, 80, 80);

        //calculte angle to cursor
        const angle = calculateAngle(
          position,
          p.createVector(p.mouseX, p.mouseY)
        );
        //draw the pupil
        p.push();
        p.rotate(angle);
        p.fill(0);
        p.ellipse(20, 0, 30, 30);
        p.pop();
        p.pop();
      };
      const calculateAngle = (from: p5.Vector, to: p5.Vector): number => {
        return p.atan2(to.y - from.y, to.x - from.x);
      };
    };
    const currentRef = sketchRef.current;
    new p5(sketch, currentRef);
    //cleanup fn
    return () => {
      if (currentRef) {
        currentRef.innerHTML = "";
      }
    };
  }, []);
  return (
    <div>
      <h2>Eye follwing</h2>
      <div ref={sketchRef}></div>
    </div>
  );
}
