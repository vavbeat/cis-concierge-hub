import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3,
  FileText,
  Users,
  Globe,
  CreditCard,
  Headphones,
  Zap,
  Award,
  TrendingUp,
  Shield,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Единая отчётность",
      description: "Все расходы по поездкам и мероприятиям в одном дашборде с детализацией по участникам",
      benefits: ["Экспорт в Excel/PDF", "Интеграция с 1С", "Автоматические инвойсы"],
      color: "text-blue-600"
    },
    {
      icon: Users,
      title: "Управление мероприятиями", 
      description: "Создавайте проекты событий и управляйте логистикой всех участников в одном месте",
      benefits: ["Групповое бронирование", "Распределение услуг", "Трекинг статусов"],
      color: "text-green-600"
    },
    {
      icon: Globe,
      title: "Покрытие СНГ",
      description: "Полное покрытие всех стран СНГ с локальными партнёрами и поддержкой 24/7",
      benefits: ["15 стран региона", "Местные тарифы", "Валютные операции"],
      color: "text-purple-600"
    },
    {
      icon: CreditCard,
      title: "Гибкие платежи",
      description: "Множественные способы оплаты с отсрочкой для корпоративных клиентов",
      benefits: ["Корпоративные карты", "Отсрочка до 30 дней", "Мультивалютность"],
      color: "text-orange-600"
    },
    {
      icon: Headphones,
      title: "24/7 Поддержка",
      description: "Круглосуточная поддержка на русском языке для решения любых вопросов",
      benefits: ["Персональный менеджер", "Экстренная помощь", "Техподдержка"],
      color: "text-red-600"
    },
    {
      icon: Shield,
      title: "Безопасность данных",
      description: "Защита персональных данных по стандартам GDPR с шифрованием уровня банков",
      benefits: ["SSL-шифрование", "Соответствие GDPR", "Резервное копирование"],
      color: "text-cyan-600"
    }
  ];

  const stats = [
    { 
      value: "500K+", 
      label: "Успешных бронирований",
      sublabel: "по всему СНГ"
    },
    { 
      value: "98.5%", 
      label: "Довольных клиентов",
      sublabel: "по отзывам"
    },
    { 
      value: "< 4 мин", 
      label: "Среднее время бронирования",
      sublabel: "полного пакета"
    },
    { 
      value: "80%", 
      label: "Экономия времени",
      sublabel: "vs. обычное бронирование"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4 text-sm px-4 py-2">
            <Award className="mr-2 h-4 w-4" />
            Лидер рынка корпоративной логистики СНГ
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Почему менеджеры выбирают Affort
          </h2>
          <p className="text-xl text-muted-foreground">
            Мы автоматизируем рутинные задачи по организации поездок 
            и позволяем сосредоточиться на стратегических задачах
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border h-full">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="inline-flex p-4 rounded-2xl bg-muted/50 mb-4 group-hover:bg-primary/10 transition-colors">
                      <IconComponent className={`h-8 w-8 ${feature.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                  
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle2 className="h-4 w-4 text-success mr-3 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="relative">
          <Card className="gradient-primary text-white overflow-hidden">
            <CardContent className="p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <TrendingUp className="h-6 w-6 text-accent mr-2" />
                      <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                    </div>
                    <div className="text-lg font-medium opacity-95">{stat.label}</div>
                    <div className="text-sm opacity-75">{stat.sublabel}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 pt-12 border-t border-white/20">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Готовы оптимизировать логистику?</h3>
                  <p className="text-lg opacity-90">Начните с бесплатного тестового периода</p>
                </div>
                <div className="flex gap-4">
                  <Button variant="secondary" size="lg" className="shadow-lg">
                    Демо-версия
                  </Button>
                  <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                    Связаться с нами
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;