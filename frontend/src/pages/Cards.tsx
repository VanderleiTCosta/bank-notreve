
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { ArrowLeft, CreditCard, Eye, EyeOff, Lock, Unlock, Settings } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Cards = () => {
  const [showCardNumber, setShowCardNumber] = useState(false);
  const [cardBlocked, setCardBlocked] = useState(false);
  const [contactlessEnabled, setContactlessEnabled] = useState(true);
  const [onlineEnabled, setOnlineEnabled] = useState(true);
  const { toast } = useToast();

  const handleBlockCard = () => {
    setCardBlocked(!cardBlocked);
    toast({
      title: cardBlocked ? "Cartão desbloqueado" : "Cartão bloqueado",
      description: cardBlocked ? "Seu cartão foi desbloqueado com sucesso." : "Seu cartão foi bloqueado temporariamente.",
    });
  };

  const recentTransactions = [
    { id: 1, merchant: "Supermercado ABC", amount: -89.90, date: "2024-01-15", category: "Alimentação" },
    { id: 2, merchant: "Netflix", amount: -29.90, date: "2024-01-14", category: "Entretenimento" },
    { id: 3, merchant: "Posto Shell", amount: -120.00, date: "2024-01-13", category: "Combustível" },
    { id: 4, merchant: "Restaurante XYZ", amount: -75.50, date: "2024-01-12", category: "Alimentação" }
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
            <h1 className="text-3xl font-bold text-white mb-2">Meus Cartões</h1>
            <p className="text-white/70">Gerencie seus cartões e configure suas preferências</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Card Display */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-r from-gray-800 to-gray-900 border-white/20 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-56 p-8 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-white/60 text-sm">Cartão de Crédito</p>
                        <p className="text-white font-medium text-lg">Rose Premium</p>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">R</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <p className="text-white text-xl font-mono tracking-wider">
                          {showCardNumber ? "4532 1234 5678 9012" : "•••• •••• •••• 9012"}
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setShowCardNumber(!showCardNumber)}
                          className="text-white hover:bg-white/10 p-1"
                        >
                          {showCardNumber ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </Button>
                      </div>
                      
                      <div className="flex justify-between">
                        <div>
                          <p className="text-white/60 text-xs">Nome</p>
                          <p className="text-white text-sm">CLIENTE BANCO ROSE</p>
                        </div>
                        <div>
                          <p className="text-white/60 text-xs">Validade</p>
                          <p className="text-white text-sm">12/28</p>
                        </div>
                        <div>
                          <p className="text-white/60 text-xs">CVV</p>
                          <p className="text-white text-sm">123</p>
                        </div>
                      </div>
                    </div>

                    {cardBlocked && (
                      <div className="absolute inset-0 bg-red-500/20 backdrop-blur-sm flex items-center justify-center">
                        <div className="text-center">
                          <Lock className="w-12 h-12 text-red-400 mx-auto mb-2" />
                          <p className="text-white font-medium">Cartão bloqueado</p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Card Info */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Informações da fatura</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-white/60">Fatura atual</span>
                    <span className="text-white font-medium">R$ 892,45</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Vencimento</span>
                    <span className="text-white font-medium">15/02/2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Limite disponível</span>
                    <span className="text-green-400 font-medium">R$ 4.107,55</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Limite total</span>
                    <span className="text-white font-medium">R$ 5.000,00</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                    Pagar fatura
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Card Controls */}
            <div className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Settings className="w-5 h-5" />
                    <span>Configurações do cartão</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">Bloquear cartão</p>
                      <p className="text-white/60 text-sm">Bloquear temporariamente o cartão</p>
                    </div>
                    <Button
                      variant={cardBlocked ? "destructive" : "secondary"}
                      onClick={handleBlockCard}
                      className="flex items-center space-x-2"
                    >
                      {cardBlocked ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                      <span>{cardBlocked ? "Desbloquear" : "Bloquear"}</span>
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">Compras por aproximação</p>
                      <p className="text-white/60 text-sm">Pagamentos contactless</p>
                    </div>
                    <Switch
                      checked={contactlessEnabled}
                      onCheckedChange={setContactlessEnabled}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">Compras online</p>
                      <p className="text-white/60 text-sm">E-commerce e compras digitais</p>
                    </div>
                    <Switch
                      checked={onlineEnabled}
                      onCheckedChange={setOnlineEnabled}
                    />
                  </div>

                  <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Solicitar 2ª via
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Transactions */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Últimas transações</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentTransactions.map((transaction) => (
                      <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors">
                        <div>
                          <p className="text-white font-medium text-sm">{transaction.merchant}</p>
                          <p className="text-white/60 text-xs">{transaction.category} • {transaction.date}</p>
                        </div>
                        <p className="text-red-400 font-medium">R$ {Math.abs(transaction.amount).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
