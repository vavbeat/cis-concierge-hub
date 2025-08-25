import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Plane, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary text-primary-foreground">
                  <Plane className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Affort</h3>
                  <span className="text-sm text-muted-foreground">platform</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Ведущий агрегатор консьерж-услуг для корпоративной логистики в странах СНГ. 
                Оптимизируем бизнес-поездки и мероприятия с 2020 года.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="p-2">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Instagram className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Услуги</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Авиабилеты</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">ЖД билеты</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Отели и размещение</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Трансферы</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">VIP-консьерж</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Бизнес-джеты</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Страхование</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Компания</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Карьера</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Партнёры</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Пресс-центр</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Инвесторы</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Блог</a></li>
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Контакты</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">+7 (495) 123-45-67</p>
                    <p className="text-sm text-muted-foreground">Горячая линия 24/7</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">support@affort.ru</p>
                    <p className="text-sm text-muted-foreground">Техническая поддержка</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Москва, Тверская 15</p>
                    <p className="text-sm text-muted-foreground">Головной офис</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Пн-Вс: 24/7</p>
                    <p className="text-sm text-muted-foreground">Поддержка клиентов</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h5 className="font-medium">Новости и обновления</h5>
                <div className="flex space-x-2">
                  <Input placeholder="Ваш email" className="text-sm" />
                  <Button size="sm" className="px-3">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Подпишитесь на новости о специальных предложениях
                </p>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 Affort Platform. Все права защищены.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Условия использования
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Правовая информация
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;