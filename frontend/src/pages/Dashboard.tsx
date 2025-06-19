
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  CreditCard, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Eye, 
  EyeOff, 
  Plus,
  TrendingUp,
  PiggyBank,
  Smartphone,
  Settings,
  LogOut,
  Bell,
  Search
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Dashboard = () => {
  const [showBalance, setShowBalance] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const userName = localStorage.getItem('userName') || 'Cliente';
  const userEmail = localStorage.getItem('userEmail') || '';

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userType');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    toast({
      title: "Logout realizado com sucesso!",
      description: "Até logo!",
    });
    navigate('/');
  };

  const quickActions = [
    { title: 'Transferir', icon: ArrowUpRight, color: 'from-blue-500 to-cyan-500', path: '/transfer' },
    { title: 'Pagar', icon: CreditCard, color: 'from-green-500 to-emerald-500', path: '/payments' },
    { title: 'Investir', icon: TrendingUp, color: 'from-purple-500 to-pink-500', path: '/investments' },
    { title: 'Cartões', icon: Smartphone, color: 'from-orange-500 to-red-500', path: '/cards' }
  ];

  const recentTransactions = [
    { id: 1, type: 'Transferência recebida', amount: 1500.00, date: '2024-01-15', from: 'João Silva' },
    { id: 2, type: 'Pagamento PIX', amount: -89.90, date: '2024-01-14', from: 'Supermercado ABC' },
    { id: 3, type: 'Investimento', amount: -500.00, date: '2024-01-13', from: 'CDB Banco Rose' },
    { id: 4, type: 'Salário', amount: 4500.00, date: '2024-01-10', from: 'Empresa XYZ Ltda' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <span className="text-white text-xl font-bold">Banco Rose</span>
              </Link>
              <div className="hidden md:flex items-center space-x-6 ml-8">
                <Link to="/dashboard" className="text-white hover:text-purple-300 transition-colors">Início</Link>
                <Link to="/transfer" className="text-white/80 hover:text-white transition-colors">Transferir</Link>
                <Link to="/payments" className="text-white/80 hover:text-white transition-colors">Pagar</Link>
                <Link to="/investments" className="text-white/80 hover:text-white transition-colors">Investir</Link>
                <Link to="/cards" className="text-white/80 hover:text-white transition-colors">Cartões</Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <Search className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10" onClick={() => navigate('/settings')}>
                <Settings className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10" onClick={handleLogout}>
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Olá, {userName.split(' ')[0]}! 👋
          </h1>
          <p className="text-white/70">
            Seja bem-vindo ao seu banco digital
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Balance Card */}
            <Card className="bg-gradient-to-r from-purple-600 to-pink-600 border-none text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-white/80 text-sm">Saldo disponível</p>
                    <div className="flex items-center space-x-2">
                      <span className="text-3xl font-bold">
                        {showBalance ? 'R$ 12.847,39' : '••••••'}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowBalance(!showBalance)}
                        className="text-white hover:bg-white/10 p-1"
                      >
                        {showBalance ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white/80 text-sm">Conta corrente</p>
                    <p className="text-white font-medium">•••• 1234</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div>
                    <p className="text-white/80 text-xs">Limite disponível</p>
                    <p className="text-white font-medium">R$ 5.000,00</p>
                  </div>
                  <div>
                    <p className="text-white/80 text-xs">Fatura atual</p>
                    <p className="text-white font-medium">R$ 892,45</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Ações rápidas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {quickActions.map((action, index) => (
                    <Link key={index} to={action.path}>
                      <Button
                        variant="ghost"
                        className="h-auto p-4 flex flex-col items-center space-y-2 hover:bg-white/10 w-full"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-full flex items-center justify-center`}>
                          <action.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-white text-sm">{action.title}</span>
                      </Button>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Transactions */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">Transações recentes</CardTitle>
                <Link to="/history">
                  <Button variant="ghost" size="sm" className="text-purple-300 hover:text-purple-200">
                    Ver todas
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTransactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${transaction.amount > 0 ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                          {transaction.amount > 0 ? 
                            <ArrowDownLeft className="w-5 h-5 text-green-400" /> : 
                            <ArrowUpRight className="w-5 h-5 text-red-400" />
                          }
                        </div>
                        <div>
                          <p className="text-white font-medium text-sm">{transaction.type}</p>
                          <p className="text-white/60 text-xs">{transaction.from}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-medium ${transaction.amount > 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {transaction.amount > 0 ? '+' : ''}R$ {Math.abs(transaction.amount).toFixed(2)}
                        </p>
                        <p className="text-white/60 text-xs">{transaction.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Investment Summary */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <PiggyBank className="w-5 h-5" />
                  <span>Investimentos</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-white/60 text-sm">Total investido</p>
                    <p className="text-2xl font-bold text-white">R$ 25.430,00</p>
                    <p className="text-green-400 text-sm">+12,5% este mês</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-white/80 text-sm">CDB</span>
                      <span className="text-white text-sm">R$ 15.000,00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80 text-sm">Tesouro Direto</span>
                      <span className="text-white text-sm">R$ 8.430,00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80 text-sm">Ações</span>
                      <span className="text-white text-sm">R$ 2.000,00</span>
                    </div>
                  </div>
                  <Link to="/investments">
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                      <Plus className="w-4 h-4 mr-2" />
                      Investir mais
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Goals */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Metas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white text-sm">Viagem para Europa</span>
                      <span className="text-white/60 text-sm">68%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '68%' }}></div>
                    </div>
                    <p className="text-white/60 text-xs mt-1">R$ 6.800 de R$ 10.000</p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white text-sm">Reserva de emergência</span>
                      <span className="text-white/60 text-sm">45%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                    <p className="text-white/60 text-xs mt-1">R$ 9.000 de R$ 20.000</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Credit Card */}
            <Card className="bg-gradient-to-r from-gray-800 to-gray-900 border-white/20">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-white/60 text-sm">Cartão de Crédito</p>
                    <p className="text-white font-medium">Rose Premium</p>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">R</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-white/60 text-xs">Fatura atual</p>
                  <p className="text-white text-xl font-bold">R$ 892,45</p>
                  <p className="text-white/60 text-xs">Vencimento: 15/02/2024</p>
                </div>
                <Link to="/cards">
                  <Button variant="outline" className="w-full mt-4 border-white/20 text-white hover:bg-white/10">
                    Gerenciar cartão
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
