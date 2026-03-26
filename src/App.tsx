import React, { useEffect } from 'react';

export default function App() {
  const onNavigate = (path: string) => {
    window.location.href = `https://app.capivaracheck.com${path}`;
  };
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-lp-surface font-sans text-lp-on-surface selection:bg-lp-primary-container/30 min-h-screen">
      <style>{`
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .surface-nesting-shift { transition: background-color 0.3s ease; }
        .no-line-rule { border: none !important; }
        .tonal-shift-bg { background-color: var(--color-lp-surface-container-low); }
        .check-pulse { position: relative; }
        .check-pulse::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: var(--color-lp-primary-container);
          opacity: 0.2;
          transform: scale(1);
          z-index: -1;
        }
      `}</style>
      
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A1A3B]/95 backdrop-blur-xl shadow-lg border-b border-white/5 font-sans antialiased tracking-tight text-white">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="text-xl font-bold tracking-tighter text-white">CapivaraCheck</div>
          <div className="hidden md:flex items-center space-gap-8 gap-8">
            <a className="text-white/70 font-medium hover:text-white transition-colors" href="#">Soluções</a>
            <a className="text-white/70 font-medium hover:text-white transition-colors" href="#">Preços</a>
            <a className="text-white/70 font-medium hover:text-white transition-colors" href="#">API</a>
            <a className="text-white/70 font-medium hover:text-white transition-colors" href="#">Sobre Nós</a>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onNavigate('/login')}
              className="text-white/80 font-medium scale-95 active:scale-100 transition-transform cursor-pointer hover:text-white"
            >
              Login
            </button>
            <button 
              onClick={() => onNavigate('/register')}
              className="bg-gradient-to-br from-lp-primary to-lp-primary-container text-white px-5 py-2.5 rounded-full font-semibold shadow-lg shadow-lp-primary/20 scale-95 active:scale-100 transition-transform cursor-pointer hover:brightness-110"
            >
              Criar Conta Grátis
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        {/* <!-- Hero Section --> */}
        <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-start text-left">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-lp-secondary-container text-lp-on-secondary-container text-xs font-bold tracking-widest uppercase mb-6">
              Para Imobiliárias e Times de Alta Performance
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-lp-on-surface leading-[1.1] mb-6">
              Análise de Crédito e Antecedentes <span className="text-lp-primary italic">em Segundos.</span> Sem Contratos Abusivos.
            </h1>
            <p className="text-lg text-lp-secondary leading-relaxed mb-10 max-w-xl">
              Consulte CPFs e CNPJs em massa. Pague apenas pelo que usar no Pix, ou assine para ter relatórios em PDF com a sua logo direto no WhatsApp.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <button 
                onClick={() => onNavigate('/register')}
                className="bg-gradient-to-br from-lp-primary to-lp-primary-container text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-lp-primary/20 hover:translate-y-[-2px] transition-all cursor-pointer"
              >
                Criar Conta Grátis
              </button>
              <button className="px-10 py-4 rounded-full font-bold text-lg text-lp-secondary hover:bg-lp-surface-container-high transition-all cursor-pointer">
                Ver Preços
              </button>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-lp-surface bg-lp-surface-container-highest flex items-center justify-center text-[10px] font-bold">JD</div>
                <div className="w-8 h-8 rounded-full border-2 border-lp-surface bg-lp-surface-container-highest flex items-center justify-center text-[10px] font-bold">AM</div>
                <div className="w-8 h-8 rounded-full border-2 border-lp-surface bg-lp-surface-container-highest flex items-center justify-center text-[10px] font-bold">PL</div>
              </div>
              <p className="text-sm text-lp-secondary/70 font-medium italic">
                Usado por mais de 500 corretores no Brasil. Dados oficiais.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-lp-primary/5 rounded-[2rem] blur-3xl -z-10"></div>
            {/* <!-- Dashboard Mockup --> */}
            <div className="bg-lp-surface-container-lowest rounded-2xl shadow-2xl border border-lp-outline-variant/10 overflow-hidden">
              <div className="bg-lp-surface-container-high px-6 py-3 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-lp-error/40"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-lp-secondary-container"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-lp-primary-container/40"></div>
                </div>
                <div className="text-[10px] font-bold tracking-widest text-lp-secondary/50 uppercase">Dashboard v2.4</div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <p className="text-xs font-bold text-lp-secondary uppercase tracking-wider mb-1">Status do Processamento</p>
                    <h3 className="text-2xl font-bold text-lp-on-surface">Lote de 307 CPFs</h3>
                  </div>
                  <div className="flex items-center gap-2 bg-lp-primary-container/10 text-lp-primary px-4 py-2 rounded-full text-sm font-bold">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Concluído
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-lp-surface-container-low rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                        <span className="material-symbols-outlined text-lp-secondary">person_search</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-lp-on-surface">Consulta Serasa Expert</p>
                        <p className="text-[10px] text-lp-secondary">Aprovação imediata via API</p>
                      </div>
                    </div>
                    <span className="text-lp-primary font-bold">R$ 4,90</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-lp-surface-container-low rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                        <span className="material-symbols-outlined text-lp-secondary">description</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-lp-on-surface">Relatório PDF White Label</p>
                        <p className="text-[10px] text-lp-secondary">Enviado p/ WhatsApp: +55 11 9***</p>
                      </div>
                    </div>
                    <span className="text-lp-primary font-bold">Grátis</span>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-lp-outline-variant/10 flex justify-end">
                  <div className="flex items-center gap-2 text-lp-primary font-bold">
                    <span className="check-pulse w-2 h-2 rounded-full bg-lp-primary inline-block"></span>
                    <span className="text-xs uppercase tracking-widest">Monitorando em tempo real</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Floating Element --> */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-lp-outline-variant/10 items-center gap-4 hidden md:flex">
              <div className="w-12 h-12 bg-lp-primary-container rounded-full flex items-center justify-center text-white">
                <span className="material-symbols-outlined">bolt</span>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-tighter text-lp-secondary">Velocidade Média</p>
                <p className="text-lg font-bold text-lp-on-surface">2.4s p/ consulta</p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Us vs Them Section --> */}
        <section className="bg-lp-surface-container-low py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Chega de burocracia antiga.</h2>
              <p className="text-lp-secondary font-medium">Por que escolher o CapivaraCheck ao invés dos bureaus tradicionais?</p>
            </div>
            <div className="grid md:grid-cols-2 gap-px bg-lp-outline-variant/20 rounded-3xl overflow-hidden shadow-sm">
              {/* <!-- Traditional --> */}
              <div className="bg-white p-12">
                <h4 className="text-lg font-bold mb-8 text-lp-secondary/50 uppercase tracking-widest">Bureaus Tradicionais</h4>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 text-lp-secondary/60">
                    <span className="material-symbols-outlined text-lp-error mt-1">close</span>
                    <span className="font-medium">Contratos de fidelidade de 12 meses</span>
                  </li>
                  <li className="flex items-start gap-4 text-lp-secondary/60">
                    <span className="material-symbols-outlined text-lp-error mt-1">close</span>
                    <span className="font-medium">Taxas de implementação e mensalidade</span>
                  </li>
                  <li className="flex items-start gap-4 text-lp-secondary/60">
                    <span className="material-symbols-outlined text-lp-error mt-1">close</span>
                    <span className="font-medium">Interfaces complexas dos anos 90</span>
                  </li>
                  <li className="flex items-start gap-4 text-lp-secondary/60">
                    <span className="material-symbols-outlined text-lp-error mt-1">close</span>
                    <span className="font-medium">Sem suporte aos finais de semana</span>
                  </li>
                </ul>
              </div>
              {/* <!-- CapivaraCheck --> */}
              <div className="bg-lp-surface-container-lowest p-12 border-l border-lp-outline-variant/10">
                <h4 className="text-lg font-bold mb-8 text-lp-primary uppercase tracking-widest">CapivaraCheck</h4>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-lp-primary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="font-bold text-lp-on-surface">Zero fidelidade. Cancele quando quiser.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-lp-primary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="font-bold text-lp-on-surface">Relatórios White Label no WhatsApp</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-lp-primary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="font-bold text-lp-on-surface">Processamento em lote com 1 clique</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-lp-primary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="font-bold text-lp-on-surface">Suporte Humano 24/7 via Chat</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Features Section --> */}
        <section className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="flex flex-col items-start gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-lp-surface-container-high flex items-center justify-center text-lp-secondary group-hover:bg-lp-primary/10 group-hover:text-lp-primary transition-all">
                <span className="material-symbols-outlined text-3xl">layers</span>
              </div>
              <h3 className="text-xl font-bold text-lp-on-surface">Processamento em Lote</h3>
              <p className="text-lp-secondary leading-relaxed">
                Esqueça digitar um por um. Suba planilhas com milhares de CPFs e receba todos os resultados formatados em minutos.
              </p>
            </div>
            <div className="flex flex-col items-start gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-lp-surface-container-high flex items-center justify-center text-lp-secondary group-hover:bg-lp-primary/10 group-hover:text-lp-primary transition-all">
                <span className="material-symbols-outlined text-3xl">auto_fix_high</span>
              </div>
              <h3 className="text-xl font-bold text-lp-on-surface">Automação White Label</h3>
              <p className="text-lp-secondary leading-relaxed">
                Personalize os relatórios com sua logo e cores. Seus clientes recebem análises profissionais que valorizam sua marca.
              </p>
            </div>
            <div className="flex flex-col items-start gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-lp-surface-container-high flex items-center justify-center text-lp-secondary group-hover:bg-lp-primary/10 group-hover:text-lp-primary transition-all">
                <span className="material-symbols-outlined text-3xl">monetization_on</span>
              </div>
              <h3 className="text-xl font-bold text-lp-on-surface">Comissionamento</h3>
              <p className="text-lp-secondary leading-relaxed">
                Crie sub-contas para seus franqueados ou parceiros e receba uma pequena taxa por cada consulta realizada por eles.
              </p>
            </div>
          </div>
        </section>

        {/* <!-- Pricing Section --> */}
        <section className="bg-lp-surface py-32 px-6 overflow-hidden relative">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-[#1A2E35]">Escolha seus créditos e consulte agora</h2>
              <p className="text-[#4F626E] text-base md:text-lg max-w-2xl mx-auto">Quanto maior o plano, mais bônus você recebe. Todos os créditos são válidos para qualquer tipo de consulta.</p>
              
              <div className="mt-8 inline-flex items-center p-1 bg-[#F2F4F6] rounded-full border border-gray-100">
                 <div className="px-5 py-2 rounded-full bg-[#1B3654] text-white font-bold text-sm shadow-sm flex items-center gap-1.5 cursor-pointer">
                   Cartão <span className="text-[9px] bg-white/20 px-1 py-0.5 rounded border border-white/20 whitespace-nowrap">+ BÔNUS</span>
                 </div>
                 <div className="px-6 py-2 rounded-full text-[#4B5E70] font-semibold text-sm cursor-pointer hover:bg-white/50 transition-colors">
                   Pix
                 </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-4 gap-6 items-stretch">
              {/* <!-- Start --> */}
              <div className="bg-white p-7 rounded-3xl border border-gray-200 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-2xl font-extrabold text-[#1A2E35] mb-1">Start</h4>
                <p className="text-[13px] text-[#617482] mb-6 h-10 leading-snug">Ideal para iniciar suas consultas com vantagens</p>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-base font-bold text-gray-400">R$</span>
                  <span className="text-5xl font-black text-[#1A2E35] tracking-tight">47</span>
                  <span className="text-sm font-bold text-gray-400">,00</span>
                </div>
                <div className="bg-blue-100/70 text-blue-700 text-[11px] font-bold px-2.5 py-1 rounded w-fit mb-8 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]">bolt</span> +R$ 8,00 BÔNUS
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-blue-500 text-lg shrink-0 pt-0.5">check_circle</span>
                    <span className="text-[13px] font-semibold text-[#4F626E] leading-tight">R$ 55 em créditos todo mês<br/><span className="text-[11px] font-medium opacity-80">(R$ 8 de bônus garantido)</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-blue-500 text-lg shrink-0 pt-0.5">check_circle</span>
                    <span className="text-[13px] font-semibold text-[#4F626E] leading-tight">Transforme indicações em dinheiro real<br/><span className="text-[11px] font-medium opacity-80">(saque R$ 10 + 10% pra cada indicado direto no PIX)</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-blue-500 text-lg shrink-0 pt-0.5">check_circle</span>
                    <span className="text-[13px] font-semibold text-[#4F626E] leading-tight">Suporte VIP 24/7 no WhatsApp e acesso à Comunidade Exclusiva</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-blue-500 text-lg shrink-0 pt-0.5">check_circle</span>
                    <span className="text-[13px] font-semibold text-[#4F626E] leading-tight">Sorteios semanais de créditos e 1 mês de plano Scale grátis</span>
                  </li>
                </ul>
                <button 
                  onClick={() => onNavigate('/register')}
                  className="w-full py-3.5 rounded-xl border-2 border-[#1B3654]/20 text-[#1B3654] font-bold hover:bg-[#F2F4F6] transition-all cursor-pointer flex items-center justify-center gap-2 mt-auto"
                >
                  <span className="material-symbols-outlined text-[18px]">open_in_new</span> Pagar com Cartão
                </button>
              </div>

              {/* <!-- Pro --> */}
              <div className="bg-white p-7 rounded-3xl border-2 border-[#0055FF] relative shadow-2xl shadow-[#0055FF]/20 flex flex-col h-full lg:scale-105 z-10 transition-transform">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0055FF] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm whitespace-nowrap">MAIS POPULAR</div>
                <h4 className="text-2xl font-extrabold text-[#1A2E35] mb-1">Pro</h4>
                <p className="text-[13px] text-[#617482] mb-6 h-10 leading-snug">Para quem consulta com frequência</p>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-base font-bold text-gray-400">R$</span>
                  <span className="text-5xl font-black text-[#1A2E35] tracking-tight">147</span>
                  <span className="text-sm font-bold text-gray-400">,00</span>
                </div>
                <div className="bg-green-100/70 text-green-700 text-[11px] font-bold px-2.5 py-1 rounded w-fit mb-8 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]">bolt</span> +R$ 30,00 BÔNUS
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-500 text-lg shrink-0 pt-0.5">check_circle</span>
                    <span className="text-[13px] font-semibold text-[#4F626E] leading-tight">R$ 177 em créditos todo mês<br/><span className="text-[11px] font-medium opacity-80">(R$ 30 de bônus garantido)</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-500 text-lg shrink-0 pt-0.5">check_circle</span>
                    <span className="text-[13px] font-semibold text-[#4F626E] leading-tight">Receba relatórios automáticos no seu WhatsApp<br/><span className="text-[11px] font-medium opacity-80">(pronto para repassar ao cliente)</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-500 text-lg shrink-0 pt-0.5">check_circle</span>
                    <span className="text-[13px] font-semibold text-[#4F626E] leading-tight">Nova fonte de renda: saque comissões de indicações no PIX</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-500 text-lg shrink-0 pt-0.5">check_circle</span>
                    <span className="text-[13px] font-semibold text-[#4F626E] leading-tight">Comunidade VIP, suporte 24/7 e sorteios exclusivos toda semana</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-500 text-lg shrink-0 pt-0.5">check_circle</span>
                    <span className="text-[13px] font-semibold text-[#4F626E] leading-tight">Ferramenta de consulta em massa para otimizar seu tempo</span>
                  </li>
                </ul>
                <button 
                  onClick={() => onNavigate('/register')}
                  className="w-full py-3.5 rounded-xl bg-[#0055FF] text-white font-bold hover:bg-[#0044CC] transition-all shadow-lg shadow-[#0055FF]/20 cursor-pointer flex items-center justify-center gap-2 mt-auto"
                >
                  <span className="material-symbols-outlined text-[18px]">open_in_new</span> Pagar com Cartão
                </button>
              </div>

              {/* <!-- Agência --> */}
              <div className="bg-white p-7 rounded-3xl border border-gray-200 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-2xl font-extrabold text-[#1A2E35] mb-1">Agência</h4>
                <p className="text-[13px] text-[#617482] mb-6 h-10 leading-snug">Para escritórios e times de vendas ativas</p>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-base font-bold text-gray-400">R$</span>
                  <span className="text-5xl font-black text-[#1A2E35] tracking-tight">347</span>
                  <span className="text-sm font-bold text-gray-400">,00</span>
                </div>
                <div className="bg-green-100/70 text-green-700 text-[11px] font-bold px-2.5 py-1 rounded w-fit mb-8 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]">bolt</span> +R$ 60,00 BÔNUS
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-500 text-lg shrink-0 pt-0.5">check_circle</span>
                    <span className="text-[13px] font-semibold text-[#4F626E] leading-tight">R$ 407 em créditos todo mês<br/><span className="text-[11px] font-medium opacity-80">(R$ 60 de bônus garantido)</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-500 text-lg shrink-0 pt-0.5">check_circle</span>
                    <span className="text-[13px] font-semibold text-[#4F626E] leading-tight">Agilize o fechamento: relatórios disparados direto no seu WhatsApp</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-500 text-lg shrink-0 pt-0.5">check_circle</span>
                    <span className="text-[13px] font-semibold text-[#4F626E] leading-tight">Libere o saque via PIX para todas as suas comissões de indicação</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-500 text-lg shrink-0 pt-0.5">check_circle</span>
                    <span className="text-[13px] font-semibold text-[#4F626E] leading-tight">Acesso à nossa Comunidade VIP com suporte prioritário 24/7 e premiações</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-500 text-lg shrink-0 pt-0.5">check_circle</span>
                    <span className="text-[13px] font-semibold text-[#4F626E] leading-tight">Consulta em massa ilimitada para grandes volumes</span>
                  </li>
                </ul>
                <button 
                  onClick={() => onNavigate('/register')}
                  className="w-full py-3.5 rounded-xl border-2 border-[#1B3654]/20 text-[#1B3654] font-bold hover:bg-[#F2F4F6] transition-all cursor-pointer flex items-center justify-center gap-2 mt-auto"
                >
                  <span className="material-symbols-outlined text-[18px]">open_in_new</span> Pagar com Cartão
                </button>
              </div>

              {/* <!-- Scale --> */}
              <div className="bg-[#111A24] text-white p-7 rounded-3xl flex flex-col h-full shadow-xl relative">
                <div className="absolute top-6 right-6 bg-[#2B3945] text-white/80 text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/5">PREMIUM TIER</div>
                <h4 className="text-2xl font-extrabold mb-1">Scale</h4>
                <p className="text-[13px] text-[#869BAA] mb-6 h-10 leading-snug max-w-[80%]">Máximo poder, menor custo por consulta</p>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-base font-bold text-gray-500">R$</span>
                  <span className="text-5xl font-black tracking-tight">747</span>
                  <span className="text-sm font-bold text-gray-500">,00</span>
                </div>
                <div className="bg-white/10 text-[#4ADE80] text-[11px] font-bold px-2.5 py-1 rounded w-fit mb-8 flex items-center gap-1 border border-[#4ADE80]/20">
                  <span className="material-symbols-outlined text-[13px]">bolt</span> +R$ 120,00 BÔNUS
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#4ADE80] text-lg shrink-0 pt-0.5">check_circle</span>
                     <span className="text-[13px] font-semibold text-[#E2E8F0] leading-tight">Desconto Exclusivo Vitalício:<br/><span className="text-[11px] font-medium opacity-70">Pague 10% a menos em TODAS as consultas</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#4ADE80] text-lg shrink-0 pt-0.5">check_circle</span>
                    <span className="text-[13px] font-semibold text-[#E2E8F0] leading-tight">Automação White Label:<br/><span className="text-[11px] font-medium opacity-70">O relatório chega no WhatsApp do SEU cliente, com a SUA logo e nome</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#4ADE80] text-lg shrink-0 pt-0.5">check_circle</span>
                    <span className="text-[13px] font-semibold text-[#E2E8F0] leading-tight">R$ 867 em créditos todo mês<br/><span className="text-[11px] font-medium opacity-70">(R$ 120 de bônus garantido)</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#4ADE80] text-lg shrink-0 pt-0.5">check_circle</span>
                    <span className="text-[13px] font-semibold text-[#E2E8F0] leading-tight">Saque ilimitado de comissões PIX e acesso de Elite à Comunidade CapivaraCheck</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#4ADE80] text-lg shrink-0 pt-0.5">check_circle</span>
                     <span className="text-[13px] font-semibold text-[#E2E8F0] leading-tight">Gerente de conta dedicado acompanhando sua operação</span>
                  </li>
                </ul>
                <button 
                  onClick={() => onNavigate('/register')}
                  className="w-full py-3.5 rounded-xl bg-[#F59E0B] text-[#111A24] font-black hover:bg-[#D97706] transition-all cursor-pointer shadow-lg shadow-[#F59E0B]/10 flex items-center justify-center gap-2 mt-auto"
                >
                  <span className="material-symbols-outlined text-[18px]">open_in_new</span> Pagar com Cartão
                </button>
              </div>
            </div>

            {/* <!-- Valor personalizado row --> */}
            <div className="mt-12 bg-white rounded-[2rem] p-6 lg:p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col lg:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
              <div>
                <h4 className="text-xl font-bold text-[#1A2E35] mb-2">Valor personalizado</h4>
                <p className="text-sm text-[#4F626E] font-medium">
                  Escolha um valor a partir de R$ 30. Apenas via Pix. Sem bônus incluso.
                </p>
              </div>
              <div className="flex w-full lg:w-auto gap-3 items-center">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                     <span className="text-[#617482] font-black">R$</span>
                  </div>
                  <input type="text" readOnly value="30" className="bg-[#F8FAFC] border border-gray-200 rounded-xl h-[52px] w-32 pl-12 pr-4 text-[#1A2E35] font-black text-lg focus:outline-none" />
                </div>
                <button 
                  onClick={() => onNavigate('/register')}
                  className="h-[52px] px-8 rounded-xl border border-gray-200 text-[#4F626E] font-bold hover:bg-gray-50 hover:text-[#1A2E35] transition-all cursor-pointer whitespace-nowrap"
                >
                  Recarregar
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* <!-- Trust & Compliance --> */}
        <section className="max-w-4xl mx-auto px-6 py-24 border-t border-lp-outline-variant/10 text-center">
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale mb-10">
            <span className="font-bold text-xl tracking-tighter">LGPD COMPLIANT</span>
            <span className="font-bold text-xl tracking-tighter">DATA SECURE</span>
            <span className="font-bold text-xl tracking-tighter">API OFFICIAL</span>
          </div>
          <p className="text-sm text-lp-secondary max-w-2xl mx-auto leading-relaxed">
            Operamos em estrita conformidade com a LGPD. Todas as informações são coletadas de fontes oficiais e processadas através de criptografia de ponta a ponta. Sua segurança e a privacidade dos dados consultados são nossa prioridade máxima.
          </p>
        </section>

        {/* <!-- Final CTA Section --> */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="bg-lp-primary rounded-[3rem] p-16 md:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">Pare de perder vendas por lentidão na aprovação.</h2>
              <p className="text-lg text-lp-primary-fixed mb-12 opacity-90">Junte-se a centenas de imobiliárias que já automatizaram seu processo de análise de risco.</p>
              <button 
                onClick={() => onNavigate('/register')}
                className="bg-white text-lp-primary px-12 py-5 rounded-full font-black text-xl shadow-2xl hover:scale-105 transition-transform cursor-pointer"
              >
                Criar Conta Grátis
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* <!-- Footer --> */}
      <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 tonal-shift-bg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 py-12 max-w-7xl mx-auto">
          <div className="col-span-2 md:col-span-1">
            <div className="text-lg font-black text-slate-900 dark:text-slate-50 mb-4">CapivaraCheck</div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Tecnologia brasileira para análise de dados com inteligência e agilidade.</p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-xs font-bold text-slate-900 dark:text-slate-50 uppercase tracking-widest mb-2">Produto</h5>
            <a className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all" href="#">Documentação API</a>
            <a className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all" href="#">Suporte</a>
            <a className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all" href="#">Segurança</a>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-xs font-bold text-slate-900 dark:text-slate-50 uppercase tracking-widest mb-2">Legal</h5>
            <a className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all" href="#">Termos de Uso</a>
            <a className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all" href="#">Privacidade</a>
            <a className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all" href="#">Compliance</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">© 2024 CapivaraCheck. Todos os direitos reservados. Em conformidade com a LGPD.</p>
          <div className="flex gap-6">
            <span className="material-symbols-outlined text-slate-400 cursor-pointer">share</span>
            <span className="material-symbols-outlined text-slate-400 cursor-pointer">language</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
