import * as motion from 'motion/react-client'


const drawing = {
  hidden: {pathLength: 0, opacity: 0},
  visible: (i: number) => {
    const delay = i * 0.5
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {delay, type: "spring", duration: 1.5, bounce: 0},
        opacity: {delay, duration: 0.01}
      }
    }
  }
}

export default function PathDrawing (){
  return(
    <motion.svg width={40} height={40} viewBox="0 0  40 40" initial="hidden" animate="visible" style={image}>
<motion.circle
                className="circle-path"
                cx="100"
                cy="100"
                r="80"
                stroke="#ff0088"
                variants={drawing}
                custom={1}
                style={shape}
            />
    </motion.svg>
  )
}


/**
 * ==============   Styles   ================
 */

const image: React.CSSProperties = {
  maxWidth: "80vw",
}

const shape: React.CSSProperties = {
  strokeWidth: 10,
  strokeLinecap: "round",
  fill: "transparent",
}