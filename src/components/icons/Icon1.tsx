// components/Icon.tsx
type IconProps = {
  active?: boolean;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

export const Icon = ({ active = false, icon: IconSVG }: IconProps) => (
  <IconSVG
    fill={active ? 'url(#animated-gradient)' : '#0D1541'}
    style={{ transition: 'fill 0.3s' }}
  >
    {active && (
      <defs>
        <linearGradient id="animated-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2B79FF" />
          <stop offset="50%" stopColor="#0014C6" />
          <stop offset="100%" stopColor="#2B79FF" />
          <animateTransform
            attributeName="gradientTransform"
            type="translate"
            from="0,0"
            to="1,0"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </linearGradient>
      </defs>
    )}
  </IconSVG>
);
