
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, TrendingUp, PiggyBank, Shield, Target, DollarSign } from 'lucide-react';

const Investments = () => {
  const [selectedInvestment, setSelectedInvestment] = useState('');

  const fixedIncomeOptions = [
    {
      title: "CDB Rose Premium",
      rate: "12,5% ao ano",
      risk: "Baixo",
      minValue: "R$ 1.000",
      liquidity: "No vencimento",
      description: "Certificado de Depósito Bancário com rentabilidade acima da poupança"
    },
    {
      title: "Tesouro Selic",
      rate: "13,75% ao ano",
      risk: "Muito baixo",
      minValue: "R$ 30",
      liquidity: "Diária",
      description: "Título público com liquidez diária e segurança do governo"
    },
    {
      title: "LCI Imobiliária",
      rate: "11,8% ao ano",
      risk: "Baixo",
      minValue: "R$ 5.000",
      liquidity: "90 dias",
      description: "Letra de Crédito Imobiliário isenta de IR"
    }
  ];

  const variableIncomeOptions = [
    {
      title: "Ações Banco Rose",
      performance: "+18,5%",
      risk: "Alto",
      minValue: "R$ 100",
      description: "Ações da própria instituição com potencial de crescimento"
    },
    {
      title: "Fundo Multimercado",
      performance: "+15,2%",
      risk: "Médio",
      minValue: "R$ 500",
      description: "Fundo diversificado com gestão ativa"
    },
    {
      title: "ETF IBOVESPA",
      performance: "+12,8%",
      risk: "Médio",
      minValue: "R$ 200",
      description: "Fundo que replica o índice Bovespa"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/dashboard" className="flex items-center space-x-2 text-white hover:text-purple-300 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Voltar ao Dashboard</span>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">R</span>
              </div>
              <span className="text-white font-bold">Banco Rose</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-white mb-2">Investimentos</h1>
            <p className="text-white/70">Faça seu dinheiro render e alcance seus objetivos</p>
          </div>

          {/* Portfolio Summary */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gradient-to-r from-green-600 to-emerald-600 border-none text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/80 text-sm">Total investido</p>
                    <p className="text-2xl font-bold">R$ 25.430,00</p>
                    <p className="text-green-200 text-sm">+12,5% este mês</p>
                  </div>
                  <PiggyBank className="w-12 h-12 text-white/80" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-600 to-cyan-600 border-none text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/80 text-sm">Rendimento mensal</p>
                    <p className="text-2xl font-bold">R$ 2.847,20</p>
                    <p className="text-blue-200 text-sm">Últimos 30 dias</p>
                  </div>
                  <TrendingUp className="w-12 h-12 text-white/80" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-600 to-pink-600 border-none text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/80 text-sm">Meta anual</p>
                    <p className="text-2xl font-bold">68%</p>
                    <p className="text-purple-200 text-sm">R$ 34.000 de R$ 50.000</p>
                  </div>
                  <Target className="w-12 h-12 text-white/80" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Investment Options */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Opções de investimento</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="fixed" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-white/10">
                  <TabsTrigger value="fixed" className="text-white data-[state=active]:bg-purple-500">
                    Renda Fixa
                  </TabsTrigger>
                  <TabsTrigger value="variable" className="text-white data-[state=active]:bg-purple-500">
                    Renda Variável
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="fixed" className="space-y-4">
                  {fixedIncomeOptions.map((investment, index) => (
                    <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                              <Shield className="w-6 h-6 text-green-400" />
                            </div>
                            <div>
                              <h3 className="text-white font-semibold">{investment.title}</h3>
                              <p className="text-white/60 text-sm">{investment.description}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-green-400 font-bold text-lg">{investment.rate}</p>
                            <p className="text-white/60 text-sm">Rentabilidade</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div>
                            <p className="text-white/60 text-xs">Risco</p>
                            <p className="text-white text-sm">{investment.risk}</p>
                          </div>
                          <div>
                            <p className="text-white/60 text-xs">Mínimo</p>
                            <p className="text-white text-sm">{investment.minValue}</p>
                          </div>
                          <div>
                            <p className="text-white/60 text-xs">Liquidez</p>
                            <p className="text-white text-sm">{investment.liquidity}</p>
                          </div>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                          Investir agora
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="variable" className="space-y-4">
                  {variableIncomeOptions.map((investment, index) => (
                    <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                              <DollarSign className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                              <h3 className="text-white font-semibold">{investment.title}</h3>
                              <p className="text-white/60 text-sm">{investment.description}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-blue-400 font-bold text-lg">{investment.performance}</p>
                            <p className="text-white/60 text-sm">Performance 12m</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-white/60 text-xs">Risco</p>
                            <p className="text-white text-sm">{investment.risk}</p>
                          </div>
                          <div>
                            <p className="text-white/60 text-xs">Mínimo</p>
                            <p className="text-white text-sm">{investment.minValue}</p>
                          </div>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                          Investir agora
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Investments;
