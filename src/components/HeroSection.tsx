import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Users, Search, ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-business-jet.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Профессиональные бизнес-услуги" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Hero Title */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <Star className="h-6 w-6 text-accent mr-2" />
              <span className="text-accent font-semibold uppercase tracking-wide text-sm">
                Премиум консьерж-сервис
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Вся логистика СНГ
              <br />
              <span className="text-accent">в одном окне</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
              Профессиональный агрегатор для менеджеров по логистике: авиа, ЖД, отели, 
              трансферы, страховка, VIP-консьерж и бизнес-джеты по всему СНГ
            </p>
          </div>

          {/* Search Form */}
          <Card className="p-6 md:p-8 bg-white/95 backdrop-blur-sm shadow-2xl border-0 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {/* From Location */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Откуда</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Москва" 
                    className="pl-10 h-12 text-base"
                  />
                </div>
              </div>

              {/* To Location */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Куда</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Алматы" 
                    className="pl-10 h-12 text-base"
                  />
                </div>
              </div>

              {/* Date */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Дата отъезда</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    type="date" 
                    className="pl-10 h-12 text-base"
                  />
                </div>
              </div>

              {/* Passengers */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Участники</label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Select>
                    <SelectTrigger className="pl-10 h-12 text-base">
                      <SelectValue placeholder="1 пассажир" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 пассажир</SelectItem>
                      <SelectItem value="2-5">2-5 пассажиров</SelectItem>
                      <SelectItem value="6-10">6-10 пассажиров</SelectItem>
                      <SelectItem value="group">Группа (10+)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Service Type Selector */}
            <div className="mb-6">
              <label className="text-sm font-medium text-muted-foreground mb-3 block">Тип услуги</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { id: 'flights', label: 'Авиабилеты', active: true },
                  { id: 'trains', label: 'ЖД билеты', active: false },
                  { id: 'hotels', label: 'Отели', active: false },
                  { id: 'all', label: 'Всё сразу', active: false }
                ].map((service) => (
                  <Button
                    key={service.id}
                    variant={service.active ? "default" : "outline"}
                    className="h-12 text-sm font-medium"
                  >
                    {service.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Search Button */}
            <Button 
              size="lg" 
              className="w-full md:w-auto px-12 h-14 text-lg font-semibold gradient-primary shadow-glow hover:scale-105 transition-bounce"
            >
              <Search className="mr-2 h-5 w-5" />
              Найти и забронировать
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-6 border-t">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500K+</div>
                <div className="text-sm text-muted-foreground">Поездок СНГ</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15 стран</div>
                <div className="text-sm text-muted-foreground">Покрытие региона</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Поддержка</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;