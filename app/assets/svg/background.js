import * as React from "react"
import Svg, {
  G,
  Path,
  Circle,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg"

function BackgroundSVG(props) {
  return (
    <Svg width={411} height={823} viewBox="0 0 411 823" fill="none" {...props}>
      <G clipPath="url(#prefix__clip0)">
        <Path fill="#3F9DB7" d="M0 0h411v823H0z" />
        <Circle cx={375} cy={99} r={135} fill="url(#prefix__paint0_linear)" />
        <Circle cx={206} cy={443} r={62} stroke="#67B1CA" strokeWidth={10} />
        <Circle cx={5} cy={333} r={90} fill="url(#prefix__paint1_linear)" />
        <Circle cx={354} cy={333} r={49} fill="url(#prefix__paint2_linear)" />
        <Circle cx={147} cy={716} r={68} fill="url(#prefix__paint3_linear)" />
        <Circle cx={335} cy={570} r={34} fill="url(#prefix__paint4_linear)" />
        <Circle
          cx={116}
          cy={140}
          r={34.5}
          stroke="url(#prefix__paint5_linear)"
          strokeWidth={9}
        />
        <Circle cx={388} cy={784} r={62} stroke="#67B1CA" strokeWidth={10} />
        <Circle cx={11} cy={585} r={50} stroke="#67B1CA" strokeWidth={6} />
      </G>
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={447.5}
          y1={11.5}
          x2={240}
          y2={194}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.104} stopColor="#C4C4C4" />
          <Stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={72.5}
          y1={243}
          x2={5}
          y2={423}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#67B1CA" />
          <Stop offset={1} stopColor="#67B1CA" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint2_linear"
          x1={291}
          y1={268}
          x2={403}
          y2={394.5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#67B1CA" />
          <Stop offset={1} stopColor="#67B1CA" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint3_linear"
          x1={185.5}
          y1={648}
          x2={104}
          y2={775}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#67B1CA" />
          <Stop offset={1} stopColor="#67B1CA" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint4_linear"
          x1={375}
          y1={598.5}
          x2={311.5}
          y2={551}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#67B1CA" />
          <Stop offset={1} stopColor="#67B1CA" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint5_linear"
          x1={55.5}
          y1={99.5}
          x2={158.5}
          y2={182.5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#92B5BF" />
          <Stop offset={1} stopColor="#92B5BF" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h411v823H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default BackgroundSVG
