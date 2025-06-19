import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Users, CreditCard, TrendingUp, DollarSign, AlertTriangle, Shield, LogOut, Palette, Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useCustomization } from '@/hooks/useCustomization';
import { CustomLogo } from '@/components/CustomLogo';

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { settings, updateSettings } = useCustomization();

  const [localPrimaryColor, setLocalPrimaryColor] = useState(settings.primaryColor);
  const [localSecondaryColor, setLocalSecondaryColor] = useState(settings.secondaryColor);
  const [localLogoUrl, setLocalLogoUrl] = useState(settings.logoUrl);

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

  const handleSaveCustomization = () => {
    updateSettings({
      primaryColor: localPrimaryColor,
      secondaryColor: localSecondaryColor,
      logoUrl: localLogoUrl
    });
    
    toast({
      title: "Personalização salva!",
      description: "As alterações foram aplicadas em todo o site.",
    });
  };

  const stats = [
    {
      title: "Clientes ativos",
      value: "12,847",
      change: "+2.5%",
      icon: Users,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Transações hoje",
      value: "R$ 2.4M",
      change: "+8.1%",
      icon: DollarSign,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cartões emitidos",
      value: "8,293",
      change: "+1.2%",
      icon: CreditCard,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Volume de investimentos",
      value: "R$ 185M",
      change: "+15.3%",
      icon: TrendingUp,
      color: "from-orange-500 to-red-500"
    }
  ];

  const recentTransactions = [
    { id: 1, user: "João Silva", type: "Transferência", amount: 1500.00, status: "Concluída", time: "14:30" },
    { id: 2, user: "Maria Santos", type: "PIX", amount: 89.90, status: "Concluída", time: "14:25" },
    { id: 3, user: "Pedro Costa", type: "Investimento", amount: 5000.00, status: "Processando", time: "14:20" },
    { id: 4, user: "Ana Lima", type: "Pagamento", amount: 250.00, status: "Concluída", time: "14:15" },
    { id: 5, user: "Carlos Ferreira", type: "Saque", amount: 200.00, status: "Pendente", time: "14:10" }
  ];

  const alerts = [
    { id: 1, type: "security", message: "Tentativa de login suspeita detectada", time: "2 min atrás", severity: "high" },
    { id: 2, type: "system", message: "Sistema de backup concluído com sucesso", time: "15 min atrás", severity: "low" },
    { id: 3, type: "fraud", message: "Transação fraudulenta bloqueada automaticamente", time: "1 hora atrás", severity: "medium" },
    { id: 4, type: "maintenance", message: "Manutenção programada para 02:00", time: "2 horas atrás", severity: "medium" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Concluída': return 'text-green-400';
      case 'Processando': return 'text-yellow-400';
      case 'Pendente': return 'text-orange-400';
      case 'Erro': return 'text-red-400';
      default: return 'text-white';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'border-red-500 bg-red-500/10';
      case 'medium': return 'border-yellow-500 bg-yellow-500/10';
      case 'low': return 'border-green-500 bg-green-500/10';
      default: return 'border-white/20 bg-white/5';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <CustomLogo />
              <div className="hidden md:flex items-center space-x-6 ml-8">
                <span className="text-purple-300 font-medium">Painel Administrativo</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10" onClick={handleLogout}>
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Dashboard Administrativo
          </h1>
          <p className="text-white/70">
            Monitore e gerencie as operações do Banco Rose
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className={`bg-gradient-to-r ${stat.color} border-none text-white`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/80 text-sm">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-white/90 text-sm">{stat.change} vs ontem</p>
                  </div>
                  <stat.icon className="w-8 h-8 text-white/80" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="transactions" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-white/10">
                <TabsTrigger value="transactions" className="text-white data-[state=active]:bg-primary">
                  Transações
                </TabsTrigger>
                <TabsTrigger value="users" className="text-white data-[state=active]:bg-primary">
                  Usuários
                </TabsTrigger>
                <TabsTrigger value="reports" className="text-white data-[state=active]:bg-primary">
                  Relatórios
                </TabsTrigger>
                <TabsTrigger value="customization" className="text-white data-[state=active]:bg-primary">
                  Personalização
                </TabsTrigger>
              </TabsList>

              <TabsContent value="transactions">
                <Card className="bg-white/10 backdrop-blur-md border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">Transações recentes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentTransactions.map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-between p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-colors">
                          <div>
                            <p className="text-white font-medium">{transaction.user}</p>
                            <p className="text-white/60 text-sm">{transaction.type} • {transaction.time}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-white font-medium">R$ {transaction.amount.toFixed(2)}</p>
                            <p className={`text-sm ${getStatusColor(transaction.status)}`}>{transaction.status}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="users">
                <Card className="bg-white/10 backdrop-blur-md border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">Gestão de usuários</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-4">
                        <Card className="bg-white/5 border-white/10">
                          <CardContent className="p-4 text-center">
                            <p className="text-2xl font-bold text-white">847</p>
                            <p className="text-white/60 text-sm">Novos hoje</p>
                          </CardContent>
                        </Card>
                        <Card className="bg-white/5 border-white/10">
                          <CardContent className="p-4 text-center">
                            <p className="text-2xl font-bold text-white">92.5%</p>
                            <p className="text-white/60 text-sm">Taxa de ativação</p>
                          </CardContent>
                        </Card>
                        <Card className="bg-white/5 border-white/10">
                          <CardContent className="p-4 text-center">
                            <p className="text-2xl font-bold text-white">1.2%</p>
                            <p className="text-white/60 text-sm">Churn rate</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reports">
                <Card className="bg-white/10 backdrop-blur-md border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">Relatórios</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Button variant="outline" className="w-full justify-start border-white/20 text-white hover:bg-white/10">
                        Relatório financeiro mensal
                      </Button>
                      <Button variant="outline" className="w-full justify-start border-white/20 text-white hover:bg-white/10">
                        Análise de risco de crédito
                      </Button>
                      <Button variant="outline" className="w-full justify-start border-white/20 text-white hover:bg-white/10">
                        Performance de investimentos
                      </Button>
                      <Button variant="outline" className="w-full justify-start border-white/20 text-white hover:bg-white/10">
                        Relatório de compliance
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="customization">
                <Card className="bg-white/10 backdrop-blur-md border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center space-x-2">
                      <Palette className="w-5 h-5" />
                      <span>Personalização do site</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Logo Section */}
                    <div className="space-y-4">
                      <h3 className="text-white font-medium text-lg">Logo</h3>
                      <div className="space-y-2">
                        <Label htmlFor="logoUrl" className="text-white">URL da logo</Label>
                        <Input
                          id="logoUrl"
                          type="url"
                          placeholder="https://exemplo.com/logo.png"
                          value={localLogoUrl}
                          onChange={(e) => setLocalLogoUrl(e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder-white/60"
                        />
                      </div>
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        <Upload className="w-4 h-4 mr-2" />
                        Fazer upload da logo
                      </Button>
                    </div>

                    {/* Colors Section */}
                    <div className="space-y-4">
                      <h3 className="text-white font-medium text-lg">Cores do tema</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="primaryColor" className="text-white">Cor primária</Label>
                          <div className="flex items-center space-x-2">
                            <Input
                              id="primaryColor"
                              type="color"
                              value={localPrimaryColor}
                              onChange={(e) => setLocalPrimaryColor(e.target.value)}
                              className="w-12 h-10 p-1 bg-white/10 border-white/20"
                            />
                            <Input
                              type="text"
                              value={localPrimaryColor}
                              onChange={(e) => setLocalPrimaryColor(e.target.value)}
                              className="bg-white/10 border-white/20 text-white"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="secondaryColor" className="text-white">Cor secundária</Label>
                          <div className="flex items-center space-x-2">
                            <Input
                              id="secondaryColor"
                              type="color"
                              value={localSecondaryColor}
                              onChange={(e) => setLocalSecondaryColor(e.target.value)}
                              className="w-12 h-10 p-1 bg-white/10 border-white/20"
                            />
                            <Input
                              type="text"
                              value={localSecondaryColor}
                              onChange={(e) => setLocalSecondaryColor(e.target.value)}
                              className="bg-white/10 border-white/20 text-white"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Preview */}
                    <div className="space-y-4">
                      <h3 className="text-white font-medium text-lg">Preview</h3>
                      <div className="p-4 rounded-lg border border-white/20 bg-white/5">
                        <div className="flex items-center space-x-3 mb-4">
                          <div 
                            className="w-10 h-10 rounded-lg flex items-center justify-center"
                            style={{ background: `linear-gradient(to right, ${localPrimaryColor}, ${localSecondaryColor})` }}
                          >
                            <span className="text-white font-bold">R</span>
                          </div>
                          <span className="text-white font-bold">Banco Rose</span>
                        </div>
                        <Button 
                          className="text-white"
                          style={{ background: `linear-gradient(to right, ${localPrimaryColor}, ${localSecondaryColor})` }}
                        >
                          Botão de exemplo
                        </Button>
                      </div>
                    </div>

                    <Button 
                      onClick={handleSaveCustomization}
                      className="w-full bg-custom-gradient hover:opacity-90 text-white"
                    >
                      Salvar personalização
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* System Status */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Shield className="w-5 h-5" />
                  <span>Status do sistema</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">API Principal</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-green-400 text-sm">Online</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Banco de dados</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-green-400 text-sm">Online</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Sistema PIX</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-yellow-400 text-sm">Lento</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Backup</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-green-400 text-sm">OK</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Alerts */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5" />
                  <span>Alertas</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {alerts.map((alert) => (
                    <div key={alert.id} className={`p-3 rounded-lg border ${getSeverityColor(alert.severity)}`}>
                      <p className="text-white text-sm font-medium">{alert.message}</p>
                      <p className="text-white/60 text-xs mt-1">{alert.time}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
