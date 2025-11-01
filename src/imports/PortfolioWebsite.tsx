import svgPaths from "./svg-ofo3gmekpo";
import imgImageAnalyticsDashboard from "figma:asset/98757621d50e9576ea63ba891c44e608d91b8555.png";

function Heading1() {
  return (
    <div className="h-[123px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[52px] left-0 text-[#9f9f9d] text-[49.467px] top-0 tracking-[-0.9893px] w-[635px]">
        <span>{`I'm Mary, a `}</span>
        <span className="font-['Libre_Caslon_Text:SemiBold_Italic',sans-serif] italic text-[#0b0b0b]">designer</span>
        <span>{` curious about `}</span>
        <span className="font-['Libre_Caslon_Text:SemiBold_Italic',sans-serif] italic text-[#0b0b0b]">interactive software</span>.
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Container">
      <Heading1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="[grid-area:1_/_2] font-['Geist:Regular',sans-serif] font-normal leading-[13px] relative shrink-0 text-[11px] tracking-[0.6px]" data-name="Container">
      <p className="absolute left-[0.5px] text-[#0b0b0b] top-[12px] w-[182px]">I help teams create intuitive, inclusive customer experiences through systems-thinking and user insights.</p>
      <p className="absolute left-[0.5px] text-[#9f9f9d] top-[76px] w-[182px]">Open to Winter/Summer 2026 opportunities.</p>
    </div>
  );
}

function Hero() {
  return (
    <div className="absolute gap-[64px] grid grid-cols-[634.5px_minmax(0px,_1fr)] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[123px] left-[32px] top-[172px] w-[910px]" data-name="Hero">
      <Container />
      <Container1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Geist:Medium',sans-serif] font-medium leading-[54px] left-0 text-[#0b0b0b] text-[36px] text-nowrap top-[-0.67px] whitespace-pre">{`Let's connect!`}</p>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[59.354px] left-0 top-0 w-[545.719px]" data-name="Link">
      <p className="absolute font-['Geist:Regular',sans-serif] font-normal leading-[59.36px] left-0 text-[#0066ff] text-[39.573px] text-nowrap top-[-0.67px] whitespace-pre">maryzhao.contact@gmail.com</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[66.41px] size-[16px] top-[1.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p154e6c80} id="Vector" stroke="var(--stroke-0, #9F9F9D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p22879fc0} id="Vector_2" stroke="var(--stroke-0, #9F9F9D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[82.406px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.5px] relative w-[82.406px]">
        <p className="absolute font-['Geist_Mono:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#9f9f9d] text-[13px] text-nowrap top-[-0.33px] whitespace-pre">LinkedIn</p>
        <Icon />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[50.8px] size-[16px] top-[1.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p154e6c80} id="Vector" stroke="var(--stroke-0, #9F9F9D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p22879fc0} id="Vector_2" stroke="var(--stroke-0, #9F9F9D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[66.802px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.5px] relative w-[66.802px]">
        <p className="absolute font-['Geist_Mono:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#9f9f9d] text-[13px] text-nowrap top-[-0.33px] whitespace-pre">GitHub</p>
        <Icon1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex gap-[32px] h-[19.5px] items-start left-0 top-[83.35px] w-[910px]" data-name="Container">
      <Link1 />
      <Link2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[102.854px] relative shrink-0 w-full" data-name="Container">
      <Link />
      <Container2 />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[188.854px] items-start relative shrink-0 w-full" data-name="Section">
      <Heading2 />
      <Container3 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[317.521px] items-start left-0 pb-0 pt-[64.667px] px-[32px] top-[1336px] w-[974px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#e3dcd3] border-[0.667px_0px_0px] border-dashed inset-0 pointer-events-none" />
      <Section />
    </div>
  );
}

function Projects() {
  return <div className="absolute h-[39px] left-[39px] top-[726.67px] w-[439px]" data-name="Projects" />;
}

function ImageAnalyticsDashboard() {
  return (
    <div className="h-[329.25px] relative shrink-0 w-full" data-name="Image (Analytics Dashboard)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageAnalyticsDashboard} />
    </div>
  );
}

function Projects1() {
  return (
    <div className="absolute bg-[#f9f8f5] content-stretch flex flex-col h-[329px] items-start left-0 overflow-clip top-0 w-[447px]" data-name="Projects">
      <ImageAnalyticsDashboard />
    </div>
  );
}

function Projects2() {
  return (
    <div className="absolute h-[18px] left-[359px] top-[4px] w-[98px]" data-name="Projects">
      <p className="absolute font-['Geist_Mono:Regular',sans-serif] font-normal leading-[18px] left-[-7px] text-[#9f9f9d] text-[13px] text-nowrap top-[-3.67px] whitespace-pre">CONCEPT 2025</p>
    </div>
  );
}

function Projects3() {
  return (
    <div className="absolute h-[25px] left-0 top-[342px] w-[447px]" data-name="Projects">
      <p className="absolute font-['Libre_Caslon_Text:Medium',sans-serif] font-medium leading-[29.68px] left-0 text-[#0b0b0b] text-[13px] text-nowrap top-[-4.67px] whitespace-pre">Analytics Dashboard</p>
      <Projects2 />
    </div>
  );
}

function Projects4() {
  return (
    <div className="absolute h-[39px] left-0 top-[372px] w-[439px]" data-name="Projects">
      <p className="absolute font-['Geist:Regular',sans-serif] font-normal leading-[13px] left-0 text-[#9f9f9d] text-[13px] top-0 w-[445px]">A comprehensive analytics platform for tracking user behavior and business metrics.</p>
    </div>
  );
}

function Link3() {
  return (
    <div className="[grid-area:1_/_1] relative shrink-0" data-name="Link">
      <Projects1 />
      <Projects3 />
      <Projects4 />
    </div>
  );
}

function ImageAnalyticsDashboard1() {
  return (
    <div className="h-[329px] relative shrink-0 w-full" data-name="Image (Analytics Dashboard)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageAnalyticsDashboard} />
    </div>
  );
}

function Projects5() {
  return (
    <div className="absolute bg-[#f9f8f5] content-stretch flex flex-col h-[329px] items-start left-0 overflow-clip top-0 w-[447px]" data-name="Projects">
      <ImageAnalyticsDashboard1 />
    </div>
  );
}

function Projects6() {
  return (
    <div className="absolute h-[18px] left-[359px] top-[4px] w-[98px]" data-name="Projects">
      <p className="absolute font-['Geist_Mono:Regular',sans-serif] font-normal leading-[18px] left-[-7px] text-[#9f9f9d] text-[13px] text-nowrap top-[-3.67px] whitespace-pre">CONCEPT 2025</p>
    </div>
  );
}

function Projects7() {
  return (
    <div className="absolute h-[25px] left-0 top-[342px] w-[447px]" data-name="Projects">
      <p className="absolute font-['Libre_Caslon_Text:Medium',sans-serif] font-medium leading-[29.68px] left-0 text-[#0b0b0b] text-[13px] text-nowrap top-[-4.67px] whitespace-pre">Analytics Dashboard</p>
      <Projects6 />
    </div>
  );
}

function Projects8() {
  return (
    <div className="absolute h-[39px] left-0 top-[372px] w-[439px]" data-name="Projects">
      <p className="absolute font-['Geist:Regular',sans-serif] font-normal leading-[13px] left-0 text-[#9f9f9d] text-[13px] top-0 w-[445px]">A comprehensive analytics platform for tracking user behavior and business metrics.</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="[grid-area:1_/_2] h-[438.333px] relative shrink-0 w-[447px]" data-name="Link">
      <Projects5 />
      <Projects7 />
      <Projects8 />
    </div>
  );
}

function ImageAnalyticsDashboard2() {
  return (
    <div className="h-[329.25px] relative shrink-0 w-full" data-name="Image (Analytics Dashboard)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageAnalyticsDashboard} />
    </div>
  );
}

function Projects9() {
  return (
    <div className="absolute bg-[#f9f8f5] content-stretch flex flex-col h-[329px] items-start left-0 overflow-clip top-0 w-[447px]" data-name="Projects">
      <ImageAnalyticsDashboard2 />
    </div>
  );
}

function Projects10() {
  return (
    <div className="absolute h-[18px] left-[359px] top-[4px] w-[98px]" data-name="Projects">
      <p className="absolute font-['Geist_Mono:Regular',sans-serif] font-normal leading-[18px] left-[-7px] text-[#9f9f9d] text-[13px] text-nowrap top-[-3.67px] whitespace-pre">CONCEPT 2025</p>
    </div>
  );
}

function Projects11() {
  return (
    <div className="absolute h-[25px] left-0 top-[342px] w-[447px]" data-name="Projects">
      <p className="absolute font-['Libre_Caslon_Text:Medium',sans-serif] font-medium leading-[29.68px] left-0 text-[#0b0b0b] text-[13px] text-nowrap top-[-4.67px] whitespace-pre">Analytics Dashboard</p>
      <Projects10 />
    </div>
  );
}

function Projects12() {
  return (
    <div className="absolute h-[39px] left-0 top-[372px] w-[439px]" data-name="Projects">
      <p className="absolute font-['Geist:Regular',sans-serif] font-normal leading-[13px] left-0 text-[#9f9f9d] text-[13px] top-0 w-[445px]">A comprehensive analytics platform for tracking user behavior and business metrics.</p>
    </div>
  );
}

function Link5() {
  return (
    <div className="[grid-area:2_/_1] h-[438.333px] relative shrink-0 w-[447px]" data-name="Link">
      <Projects9 />
      <Projects11 />
      <Projects12 />
    </div>
  );
}

function Projects13() {
  return (
    <div className="absolute gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[892.667px] left-[32px] top-[369px] w-[910px]" data-name="Projects">
      <Link3 />
      <Link4 />
      <Link5 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute h-[2458.23px] left-0 top-0 w-[974px]" data-name="App">
      <Hero />
      <Footer />
      <Projects />
      <Projects13 />
      <p className="absolute font-['Geist:Regular',sans-serif] font-normal leading-[27px] left-[32px] text-[#9f9f9d] text-[20px] text-nowrap top-[332px] tracking-[-0.9893px] whitespace-pre">Selected works</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Geist_Mono:Regular',sans-serif] font-normal leading-[27px] left-0 text-[#0b0b0b] text-[18px] text-nowrap top-[-0.67px] uppercase whitespace-pre">Mary Zhao</p>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[27px] items-start left-0 top-[0.5px] w-[97.208px]" data-name="Link">
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[#fffefa] h-[28px] left-[146.68px] rounded-[2.23696e+07px] top-0 w-[75.854px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e3dcd3] border-solid inset-0 pointer-events-none rounded-[2.23696e+07px]" />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute box-border content-stretch flex h-[28px] items-center left-0 px-[12px] py-0 top-0 w-[56.25px]" data-name="Button">
      <p className="font-['Geist_Mono:Medium',sans-serif] font-medium leading-[19.5px] relative shrink-0 text-[#9f9f9d] text-[13px] text-nowrap tracking-[0.26px] uppercase whitespace-pre">WORK</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute box-border content-stretch flex h-[28px] items-center left-[68.25px] px-[12px] py-0 top-0 w-[64.302px]" data-name="Button">
      <p className="font-['Geist_Mono:Medium',sans-serif] font-medium leading-[19.5px] relative shrink-0 text-[#9f9f9d] text-[13px] text-nowrap tracking-[0.26px] uppercase whitespace-pre">ABOUT</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute box-border content-stretch flex h-[28px] items-center left-[144.55px] px-[12px] py-0 top-0 w-[80.427px]" data-name="Button">
      <p className="font-['Geist_Mono:Medium',sans-serif] font-medium leading-[19.5px] relative shrink-0 text-[#0b0b0b] text-[13px] text-nowrap tracking-[0.26px] uppercase whitespace-pre">CONTACT</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[28px] left-[685.02px] top-0 w-[224.979px]" data-name="Container">
      <Container5 />
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <Link6 />
      <Container6 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[#f9f8f5] box-border content-stretch flex flex-col h-[60.667px] items-start left-0 pb-[0.667px] pt-[16px] px-[32px] top-0 w-[974px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e3dcd3] border-[0px_0px_0.67px] border-dashed bottom-[-0.67px] left-0 pointer-events-none right-0 top-0" />
      <Container7 />
    </div>
  );
}

function Text() {
  return (
    <div className="opacity-0 relative shrink-0 size-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-0" />
    </div>
  );
}

function CustomCursor() {
  return (
    <div className="absolute bg-[#0066ff] content-stretch flex items-center justify-center left-[744px] rounded-[8px] size-[16px] top-[-8px]" data-name="CustomCursor">
      <Text />
    </div>
  );
}

export default function PortfolioWebsite() {
  return (
    <div className="bg-[#f9f8f5] relative size-full" data-name="Portfolio Website">
      <App />
      <Header />
      <CustomCursor />
    </div>
  );
}