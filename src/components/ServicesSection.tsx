import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Plane, 
  Train, 
  Hotel, 
  Car, 
  Utensils, 
  Shield, 
  Crown, 
  ShieldCheck,
  Clock,
  CheckCircle,
  ArrowRight,
  MapPin
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Plane,
      title: "Авиабилеты",
      description: "Внутренние и международные рейсы по СНГ с лучшими тарифами",
      features: ["Поиск по 500+ авиакомпаний", "Групповые тарифы", "Обмен/возврат"],
      badge: "Популярно",
      color: "bg-blue-500"
    },
    {
      icon: Train,
      title: "ЖД билеты",
      description: "Железнодорожные билеты по России, Казахстану, Беларуси",
      features: ["Все классы вагонов", "Льготные тарифы", "Электронные билеты"],
      badge: "СНГ",
      color: "bg-green-500"
    },
    {
      icon: Hotel,
      title: "Отели",
      description: "Более 100K отелей от эконом до люкс класса",
      features: ["Корпоративные тарифы", "Отмена без штрафа", "Завтрак включён"],
      badge: "Выгодно",
      color: "bg-purple-500"
    },
    {
      icon: Car,
      title: "Трансферы",
      description: "Индивидуальные и групповые трансферы любого класса",
      features: ["Встреча с табличкой", "Премиум авто", "Круглосуточно"],
      badge: "VIP",
      color: "bg-orange-500"
    },
    {
      icon: Utensils,
      title: "Питание",
      description: "Кейтеринг и доставка еды для мероприятий",
      features: ["Бизнес-ланчи", "Кейтеринг событий", "Диетическое меню"],
      badge: "Новое",
      color: "bg-red-500"
    },
    {
      icon: Shield,
      title: "Страхование",
      description: "Медицинская и travel-страховка для всех стран СНГ",
      features: ["Без франшизы", "Покрытие до €100K", "Онлайн оформление"],
      badge: "Надёжно",
      color: "bg-cyan-500"
    },
    {
      icon: Crown,
      title: "VIP-консьерж",
      description: "Персональный ассистент для решения любых задач",
      features: ["Личный менеджер", "Экстренная помощь", "Протокольные услуги"],
      badge: "Premium",
      color: "bg-yellow-500"
    },
    {
      icon: ShieldCheck,
      title: "Бизнес-джеты",
      description: "Чартерные рейсы и частная авиация по СНГ",
      features: ["Вылет за 4 часа", "Прямые маршруты", "Максимальная приватность"],
      badge: "Люкс",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
            <MapPin className="mr-2 h-4 w-4" />
            Покрытие 15 стран СНГ
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Все услуги логистики в одной платформе
          </h2>
          <p className="text-xl text-muted-foreground">
            От простых билетов до комплексного VIP-сопровождения. 
            Забронируйте всё необходимое для мероприятия за один клик.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl hover:scale-105 transition-all duration-300 border-0 gradient-card"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl ${service.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {service.badge}
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full group/btn hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Подробнее
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-6 p-6 bg-white rounded-2xl shadow-lg border">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 text-primary" />
              <span>Экономия времени до 80%</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-success" />
              <span>Единая отчётность</span>
            </div>
            <Button size="lg" className="gradient-primary shadow-glow">
              Начать бронирование
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;