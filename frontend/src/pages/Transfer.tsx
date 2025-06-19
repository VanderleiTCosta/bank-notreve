
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Send, User, Building, CreditCard } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Transfer = () => {
  const [transferType, setTransferType] = useState('');
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleTransfer = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate transfer
    setTimeout(() => {
      toast({
        title: "Transferência realizada!",
        description: `R$ ${amount} transferido com sucesso.`,
      });
      setIsLoading(false);
      navigate('/dashboard');
    }, 2000);
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
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-white mb-2">Transferir dinheiro</h1>
            <p className="text-white/70">Envie dinheiro de forma rápida e segura</p>
          </div>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <Send className="w-5 h-5" />
                <span>Nova transferência</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleTransfer} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="transferType" className="text-white">Tipo de transferência</Label>
                  <Select value={transferType} onValueChange={setTransferType}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pix">PIX</SelectItem>
                      <SelectItem value="ted">TED</SelectItem>
                      <SelectItem value="doc">DOC</SelectItem>
                      <SelectItem value="internal">Transferência interna</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="recipient" className="text-white">Destinatário</Label>
                  <Input
                    id="recipient"
                    type="text"
                    placeholder="CPF, e-mail ou chave PIX"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-white/60"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount" className="text-white">Valor</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="0,00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-white/60"
                    required
                    min="0.01"
                    step="0.01"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-white">Descrição (opcional)</Label>
                  <Input
                    id="description"
                    type="text"
                    placeholder="Ex: Pagamento aluguel"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-white/60"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? 'Transferindo...' : 'Transferir'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Quick Transfer Options */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-colors cursor-pointer">
              <CardContent className="p-6 text-center">
                <User className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-white font-medium mb-2">Contatos</h3>
                <p className="text-white/60 text-sm">Transferir para contatos salvos</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-colors cursor-pointer">
              <CardContent className="p-6 text-center">
                <Building className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-white font-medium mb-2">Outros bancos</h3>
                <p className="text-white/60 text-sm">TED/DOC para outros bancos</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-colors cursor-pointer">
              <CardContent className="p-6 text-center">
                <CreditCard className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-white font-medium mb-2">PIX</h3>
                <p className="text-white/60 text-sm">Transferência instantânea</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
