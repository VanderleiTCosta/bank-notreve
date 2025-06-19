
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, CreditCard, Smartphone, Zap, Building } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Payments = () => {
  const [barcode, setBarcode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate payment
    setTimeout(() => {
      toast({
        title: "Pagamento realizado!",
        description: "Boleto pago com sucesso.",
      });
      setIsLoading(false);
      setBarcode('');
    }, 2000);
  };

  const paymentOptions = [
    {
      icon: CreditCard,
      title: "Cartão de Crédito",
      description: "Pagar fatura do cartão",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Contas de Luz",
      description: "Energia elétrica",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Smartphone,
      title: "Telefone",
      description: "Celular e telefone fixo",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Building,
      title: "Financiamentos",
      description: "Prestações e financiamentos",
      color: "from-purple-500 to-pink-500"
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
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-white mb-2">Pagamentos</h1>
            <p className="text-white/70">Pague suas contas de forma rápida e segura</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Barcode Payment */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Pagar com código de barras</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePayment} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="barcode" className="text-white">Código de barras ou linha digitável</Label>
                    <Input
                      id="barcode"
                      type="text"
                      placeholder="Digite ou cole o código aqui"
                      value={barcode}
                      onChange={(e) => setBarcode(e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder-white/60"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                    disabled={isLoading || !barcode}
                  >
                    {isLoading ? 'Processando...' : 'Continuar pagamento'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Payment Categories */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Categorias de pagamento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {paymentOptions.map((option, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="h-auto p-4 flex flex-col items-center space-y-2 hover:bg-white/10"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${option.color} rounded-full flex items-center justify-center`}>
                        <option.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-center">
                        <p className="text-white text-sm font-medium">{option.title}</p>
                        <p className="text-white/60 text-xs">{option.description}</p>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Payments */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 mt-8">
            <CardHeader>
              <CardTitle className="text-white">Pagamentos recentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                      <Zap className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">Conta de Luz - CEMIG</p>
                      <p className="text-white/60 text-xs">Vencimento: 25/01/2024</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-medium">R$ 185,42</p>
                    <p className="text-green-400 text-xs">Pago</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">Cartão Rose Premium</p>
                      <p className="text-white/60 text-xs">Vencimento: 15/02/2024</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-medium">R$ 892,45</p>
                    <p className="text-orange-400 text-xs">Pendente</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Payments;
