import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AppLayout from '@/layouts/app-layout';
import { zodResolver } from '@hookform/resolvers/zod';
import { Head, router, usePage } from '@inertiajs/react';
import { Building2, Edit2, Settings2, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

// Rotas Tipadas Wayfinder (ajuste conforme seu print)
import {
  destroy as destroyDept,
  store as storeDept,
  update as updateDept,
} from '@/routes/admin/departments';
import { update as updateSettings } from '@/routes/admin/settings';

// --- SCHEMAS DE VALIDAÇÃO ---
const settingsSchema = z.object({
  address: z.string().min(1, 'Endereço é obrigatório'),
  facebook_url: z.string().url('URL inválida').or(z.literal('')),
  instagram_url: z.string().url('URL inválida').or(z.literal('')),
  linkedin_url: z.string().url('URL inválida').or(z.literal('')),
  youtube_url: z.string().url('URL inválida').or(z.literal('')),
});

const deptSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  whatsapp: z.string().optional(),
  email: z.string().email('E-mail inválido').or(z.literal('')),
  sort_order: z.coerce.number().default(0),
});

// --- INTERFACES ---
interface Department {
  id: number;
  name: string;
  whatsapp?: string;
  email?: string;
  sort_order: number;
}

interface Props {
  settings: any;
  departments: Department[];
}

export default function SettingsPage({ settings, departments }: Props) {
  const { props } = usePage<{ flash: { message?: string } }>();
  const [editingDept, setEditingDept] = useState<Department | null>(null);

  // Forms
  const settingsForm = useForm<z.infer<typeof settingsSchema>>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      address: settings?.address ?? '',
      facebook_url: settings?.facebook_url ?? '',
      instagram_url: settings?.instagram_url ?? '',
      linkedin_url: settings?.linkedin_url ?? '',
      youtube_url: settings?.youtube_url ?? '',
    },
  });

  const deptForm = useForm<z.infer<typeof deptSchema>>({
    resolver: zodResolver(deptSchema),
    defaultValues: { name: '', whatsapp: '', email: '', sort_order: 0 },
  });

  // Actions
  function onSettingsSubmit(values: z.infer<typeof settingsSchema>) {
    router.post(updateSettings().url, values, { preserveScroll: true });
  }

  function onDeptSubmit(values: z.infer<typeof deptSchema>) {
    if (editingDept) {
      router.put(updateDept({ department: editingDept.id }).url, values, {
        onSuccess: () => {
          setEditingDept(null);
          deptForm.reset();
        },
        preserveScroll: true,
      });
    } else {
      router.post(storeDept().url, values, {
        onSuccess: () => deptForm.reset(),
        preserveScroll: true,
      });
    }
  }

  return (
    <AppLayout breadcrumbs={[{ title: 'Configurações', href: '#' }]}>
      <Head title="Configurações do Sistema" />

      <div className="flex flex-col gap-6 p-6">
        {props.flash?.message && (
          <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800">
            {props.flash.message}
          </div>
        )}

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="general" className="flex items-center gap-2">
              <Settings2 className="h-4 w-4" /> Geral
            </TabsTrigger>
            <TabsTrigger
              value="departments"
              className="flex items-center gap-2"
            >
              <Building2 className="h-4 w-4" /> Departamentos
            </TabsTrigger>
          </TabsList>

          {/* ABA CONFIGURAÇÕES GERAIS */}
          <TabsContent value="general" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Dados do Site</CardTitle>
                <CardDescription>
                  Configure informações de contato e redes sociais.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...settingsForm}>
                  <form
                    onSubmit={settingsForm.handleSubmit(onSettingsSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={settingsForm.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Endereço Físico</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Rua exemplo, 123..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      {[
                        'facebook_url',
                        'instagram_url',
                        'linkedin_url',
                        'youtube_url',
                      ].map((social) => (
                        <FormField
                          key={social}
                          control={settingsForm.control}
                          name={social as any}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="capitalize">
                                {social.replace('_url', '')}
                              </FormLabel>
                              <FormControl>
                                <Input placeholder="https://..." {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                    <Button type="submit">Salvar Alterações</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ABA DEPARTAMENTOS */}
          <TabsContent value="departments" className="mt-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* FORMULÁRIO */}
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle>
                    {editingDept ? 'Editar Setor' : 'Novo Setor'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...deptForm}>
                    <form
                      onSubmit={deptForm.handleSubmit(onDeptSubmit)}
                      className="space-y-4"
                    >
                      <FormField
                        control={deptForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={deptForm.control}
                        name="whatsapp"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>WhatsApp</FormLabel>
                            <FormControl>
                              <Input placeholder="55..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={deptForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>E-mail</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={deptForm.control}
                        name="sort_order"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Ordem</FormLabel>
                            <FormControl>
                              <Input type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="flex gap-2">
                        <Button type="submit" className="flex-1">
                          {editingDept ? 'Atualizar' : 'Cadastrar'}
                        </Button>
                        {editingDept && (
                          <Button
                            variant="outline"
                            onClick={() => {
                              setEditingDept(null);
                              deptForm.reset();
                            }}
                          >
                            Cancelar
                          </Button>
                        )}
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>

              {/* TABELA */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Departamentos Ativos</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-16">Ordem</TableHead>
                        <TableHead>Setor</TableHead>
                        <TableHead>Contato</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {departments.map((dept) => (
                        <TableRow key={dept.id}>
                          <TableCell className="font-mono text-xs">
                            {dept.sort_order}
                          </TableCell>
                          <TableCell className="font-medium">
                            {dept.name}
                          </TableCell>
                          <TableCell className="text-xs text-muted-foreground">
                            {dept.whatsapp && <div>W: {dept.whatsapp}</div>}
                            {dept.email && <div>E: {dept.email}</div>}
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => {
                                  setEditingDept(dept);
                                  deptForm.reset(dept as any);
                                }}
                              >
                                <Edit2 className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="text-destructive"
                                onClick={() =>
                                  confirm('Excluir?') &&
                                  router.delete(
                                    destroyDept({ department: dept.id }).url,
                                  )
                                }
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}
