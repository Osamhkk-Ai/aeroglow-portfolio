
import { OWNER } from '@info/portfolio_and_socials';

export default function FloatingCharacter() {
  return (
    <div
      className="fixed pointer-events-none z-10 opacity-80"
      style={{
        width: '160px',
        height: '160px',
        animation: 'flyRocket 45s ease-in-out infinite',
      }}
    >
      <img
        src={OWNER.rocketImage}
        alt="Flying Rocket"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          filter: 'drop-shadow(0 0 10px rgba(56, 189, 248, 0.5))',
        }}
      />

      <style>{`
        @keyframes flyRocket {
          0% {
            transform: translate(10vw, 20vh) rotate(10deg);
          }
          15% {
            transform: translate(25vw, 35vh) rotate(-5deg);
          }
          30% {
            transform: translate(60vw, 25vh) rotate(8deg);
          }
          50% {
            transform: translate(75vw, 55vh) rotate(-10deg);
          }
          70% {
            transform: translate(45vw, 70vh) rotate(6deg);
          }
          85% {
            transform: translate(20vw, 50vh) rotate(-3deg);
          }
          100% {
            transform: translate(10vw, 20vh) rotate(10deg);
          }
        }
      `}</style>
    </div>
  );
}
