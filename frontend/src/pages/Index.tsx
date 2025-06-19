
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Shield, Smartphone, CreditCard, TrendingUp, Users, Lock, Zap } from 'lucide-react';
import { CustomLogo } from '@/components/CustomLogo';
import { useCustomization } from '@/hooks/useCustomization';

const Index = () => {
  const [email, setEmail] = useState('');
  const { settings } = useCustomization();

  const features = [
    {
      icon: Shield,
      title: "Segurança Máxima",
      description: "Proteção bancária de nível militar com criptografia avançada"
    },
    {
      icon: Smartphone,
      title: "Banking Digital",
      description: "Gerencie suas finanças 24/7 pelo app ou web"
    },
    {
      icon: CreditCard,
      title: "Cartão sem Anuidade",
      description: "Cartão de crédito internacional sem taxas ocultas"
    },
    {
      icon: TrendingUp,
      title: "Investimentos",
      description: "Renda fixa e variável com rentabilidade acima da média"
    },
    {
      icon: Users,
      title: "Atendimento 24h",
      description: "Suporte especializado sempre que precisar"
    },
    {
      icon: Zap,
      title: "PIX Instantâneo",
      description: "Transferências em tempo real sem complicação"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="relative z-10 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <CustomLogo />
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-white/80 hover:text-white transition-colors">Produtos</a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors">Sobre</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contato</a>
              <Link to="/login" className="text-white/80 hover:text-white transition-colors">Entrar</Link>
              <Link to="/register">
                <Button className="bg-custom-gradient hover:opacity-90 text-white">
                  Abrir Conta
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${settings.primaryColor}20, ${settings.secondaryColor}20)` }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                O banco digital que
                <span 
                  className="bg-clip-text text-transparent"
                  style={{ background: `linear-gradient(to right, ${settings.primaryColor}, ${settings.secondaryColor})`, WebkitBackgroundClip: 'text' }}
                > revoluciona </span>
                suas finanças
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Conta digital gratuita, cartão sem anuidade, investimentos inteligentes e PIX instantâneo. 
                Tudo isso com a segurança que você merece.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/register">
                  <Button size="lg" className="bg-custom-gradient hover:opacity-90 text-white text-lg px-8 py-3">
                    Abrir Conta Grátis
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/login">
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-3">
                    Já sou cliente
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-white/60">
                <div className="flex items-center space-x-2">
                  <Lock className="w-4 h-4" />
                  <span className="text-sm">100% Seguro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm">Banco Central</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Comece agora mesmo</h3>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2"
                    style={{ '--tw-ring-color': settings.primaryColor } as React.CSSProperties}
                  />
                  <Link to="/register">
                    <Button className="w-full bg-custom-gradient hover:opacity-90 text-white py-3">
                      Criar Conta Gratuita
                    </Button>
                  </Link>
                </div>
                <p className="text-white/60 text-sm text-center mt-4">
                  Abertura 100% digital em poucos minutos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Por que escolher o Banco Rose?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Tecnologia de ponta, segurança máxima e atendimento humanizado
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: `linear-gradient(to right, ${settings.primaryColor}, ${settings.secondaryColor})` }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para revolucionar suas finanças?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de clientes que já escolheram o Banco Rose
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-custom-gradient hover:opacity-90 text-white text-lg px-12 py-4">
              Abrir Conta Agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-md border-t border-white/10 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <CustomLogo showText={true} />
              </div>
              <p className="text-white/60 text-sm">
                O banco digital que revoluciona suas finanças com segurança e inovação.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Produtos</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>Conta Digital</li>
                <li>Cartão de Crédito</li>
                <li>Investimentos</li>
                <li>PIX</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>Central de Ajuda</li>
                <li>Atendimento 24h</li>
                <li>Ouvidoria</li>
                <li>Segurança</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>Sobre nós</li>
                <li>Carreiras</li>
                <li>Imprensa</li>
                <li>Contato</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60 text-sm">
            <p>&copy; 2024 Banco Rose. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
