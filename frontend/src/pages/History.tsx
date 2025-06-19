
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, ArrowUpRight, ArrowDownLeft, Search, Filter, Download } from 'lucide-react';

const History = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterPeriod, setFilterPeriod] = useState('30days');

  const transactions = [
    { id: 1, type: 'received', description: 'Transferência recebida', amount: 1500.00, date: '2024-01-15', time: '14:30', from: 'João Silva', category: 'Transferência' },
    { id: 2, type: 'sent', description: 'Pagamento PIX', amount: -89.90, date: '2024-01-14', time: '10:15', from: 'Supermercado ABC', category: 'Alimentação' },
    { id: 3, type: 'sent', description: 'Investimento CDB', amount: -500.00, date: '2024-01-13', time: '16:45', from: 'CDB Banco Rose', category: 'Investimento' },
    { id: 4, type: 'received', description: 'Salário', amount: 4500.00, date: '2024-01-10', time: '08:00', from: 'Empresa XYZ Ltda', category: 'Salário' },
    { id: 5, type: 'sent', description: 'Pagamento fatura', amount: -250.80, date: '2024-01-09', time: '19:20', from: 'Cartão Rose Premium', category: 'Pagamento' },
    { id: 6, type: 'sent', description: 'Transferência PIX', amount: -150.00, date: '2024-01-08', time: '12:10', from: 'Maria Santos', category: 'Transferência' },
    { id: 7, type: 'received', description: 'Cashback', amount: 15.50, date: '2024-01-07', time: '22:30', from: 'Programa Cashback', category: 'Cashback' },
    { id: 8, type: 'sent', description: 'Conta de luz', amount: -185.42, date: '2024-01-05', time: '15:45', from: 'CEMIG', category: 'Conta' }
  ];

  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.from.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || 
                       (filterType === 'received' && transaction.type === 'received') ||
                       (filterType === 'sent' && transaction.type === 'sent');
    return matchesSearch && matchesType;
  });

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Transferência': 'bg-blue-500/20 text-blue-400',
      'Alimentação': 'bg-green-500/20 text-green-400',
      'Investimento': 'bg-purple-500/20 text-purple-400',
      'Salário': 'bg-yellow-500/20 text-yellow-400',
      'Pagamento': 'bg-red-500/20 text-red-400',
      'Cashback': 'bg-pink-500/20 text-pink-400',
      'Conta': 'bg-orange-500/20 text-orange-400'
    };
    return colors[category] || 'bg-gray-500/20 text-gray-400';
  };

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
            <h1 className="text-3xl font-bold text-white mb-2">Histórico de transações</h1>
            <p className="text-white/70">Acompanhe todas as suas movimentações financeiras</p>
          </div>

          {/* Filters */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-6">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
                  <Input
                    placeholder="Buscar transação..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder-white/60"
                  />
                </div>
                
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas</SelectItem>
                    <SelectItem value="received">Recebidas</SelectItem>
                    <SelectItem value="sent">Enviadas</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={filterPeriod} onValueChange={setFilterPeriod}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Período" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7days">Últimos 7 dias</SelectItem>
                    <SelectItem value="30days">Últimos 30 dias</SelectItem>
                    <SelectItem value="90days">Últimos 90 dias</SelectItem>
                    <SelectItem value="year">Este ano</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Download className="w-4 h-4 mr-2" />
                  Exportar
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Transactions List */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white">
                Transações ({filteredTransactions.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 rounded-lg hover:bg-white/5 transition-colors border border-white/10">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${transaction.type === 'received' ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                        {transaction.type === 'received' ? 
                          <ArrowDownLeft className="w-6 h-6 text-green-400" /> : 
                          <ArrowUpRight className="w-6 h-6 text-red-400" />
                        }
                      </div>
                      <div>
                        <p className="text-white font-medium">{transaction.description}</p>
                        <p className="text-white/60 text-sm">{transaction.from}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className={`px-2 py-1 rounded-full text-xs ${getCategoryColor(transaction.category)}`}>
                            {transaction.category}
                          </span>
                          <span className="text-white/40 text-xs">
                            {transaction.date} às {transaction.time}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold text-lg ${transaction.amount > 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {transaction.amount > 0 ? '+' : ''}R$ {Math.abs(transaction.amount).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {filteredTransactions.length === 0 && (
                <div className="text-center py-12">
                  <Filter className="w-12 h-12 text-white/40 mx-auto mb-4" />
                  <p className="text-white/60">Nenhuma transação encontrada</p>
                  <p className="text-white/40 text-sm">Tente ajustar os filtros de busca</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default History;
