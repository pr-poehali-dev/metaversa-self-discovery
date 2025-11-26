import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const NatalChart = () => {
  const planets = [
    { name: "Солнце", sign: "♌ Лев", house: "10", degree: "15°23'", icon: "Sun", color: "text-orange-400" },
    { name: "Луна", sign: "♓ Рыбы", house: "4", degree: "8°12'", icon: "Moon", color: "text-blue-300" },
    { name: "Меркурий", sign: "♍ Дева", house: "11", degree: "22°45'", icon: "MessageCircle", color: "text-green-400" },
    { name: "Венера", sign: "♎ Весы", house: "12", degree: "3°56'", icon: "Heart", color: "text-pink-400" },
    { name: "Марс", sign: "♈ Овен", house: "5", degree: "18°33'", icon: "Flame", color: "text-red-400" },
    { name: "Юпитер", sign: "♐ Стрелец", house: "2", degree: "27°10'", icon: "Sparkles", color: "text-purple-400" },
    { name: "Сатурн", sign: "♑ Козерог", house: "3", degree: "11°28'", icon: "Mountain", color: "text-gray-400" },
    { name: "Уран", sign: "♒ Водолей", house: "4", degree: "6°02'", icon: "Zap", color: "text-cyan-400" },
    { name: "Нептун", sign: "♓ Рыбы", house: "4", degree: "9°15'", icon: "Droplet", color: "text-blue-400" },
    { name: "Плутон", sign: "♏ Скорпион", house: "1", degree: "13°47'", icon: "Circle", color: "text-indigo-400" }
  ];

  const aspects = [
    { planet1: "Солнце", planet2: "Луна", type: "Трин", angle: "120°", strength: "Сильный" },
    { planet1: "Венера", planet2: "Марс", type: "Соединение", angle: "0°", strength: "Очень сильный" },
    { planet1: "Меркурий", planet2: "Юпитер", type: "Секстиль", angle: "60°", strength: "Средний" },
    { planet1: "Сатурн", planet2: "Уран", type: "Квадрат", angle: "90°", strength: "Напряжённый" }
  ];

  const houses = [
    { number: 1, name: "Личность", description: "Ваша внешность и поведение" },
    { number: 2, name: "Ресурсы", description: "Финансы и ценности" },
    { number: 3, name: "Коммуникации", description: "Общение и обучение" },
    { number: 4, name: "Дом и семья", description: "Корни и безопасность" },
    { number: 5, name: "Творчество", description: "Самовыражение и дети" },
    { number: 6, name: "Здоровье", description: "Работа и забота о себе" },
    { number: 7, name: "Партнёрство", description: "Отношения и брак" },
    { number: 8, name: "Трансформация", description: "Глубокие изменения" },
    { number: 9, name: "Мудрость", description: "Философия и путешествия" },
    { number: 10, name: "Карьера", description: "Призвание и статус" },
    { number: 11, name: "Сообщество", description: "Друзья и мечты" },
    { number: 12, name: "Подсознание", description: "Тайны и духовность" }
  ];

  return (
    <div className="min-h-screen">
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Icon name="Sparkles" className="text-primary" size={28} />
              <span className="text-xl font-bold text-gradient">AstroVerse</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link to="/" className="text-foreground/80 hover:text-primary transition-colors">Главная</Link>
              <Link to="/profile" className="text-foreground/80 hover:text-primary transition-colors">Профиль</Link>
              <Link to="/quests" className="text-foreground/80 hover:text-primary transition-colors">Квесты</Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3">Натальная карта</h1>
          <p className="text-foreground/70 text-lg">Ваш космический паспорт и ключ к самопознанию</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 cosmic-glow">
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-secondary/20 to-background border-2 border-primary/40 flex items-center justify-center">
                  <div className="absolute inset-8 rounded-full border border-primary/20"></div>
                  <div className="absolute inset-16 rounded-full border border-primary/20"></div>
                  <div className="absolute inset-24 rounded-full border border-primary/20"></div>
                  
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-primary/20"></div>
                  <div className="absolute top-0 bottom-0 left-1/2 w-px bg-primary/20"></div>
                  <div className="absolute top-1/4 left-1/4 right-1/4 bottom-1/4 border border-primary/10 rounded-full"></div>

                  {[...Array(12)].map((_, i) => {
                    const angle = (i * 30 - 90) * (Math.PI / 180);
                    const x = 50 + 45 * Math.cos(angle);
                    const y = 50 + 45 * Math.sin(angle);
                    return (
                      <div
                        key={i}
                        className="absolute w-8 h-8 flex items-center justify-center text-xs font-semibold text-primary/60"
                        style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                      >
                        {i + 1}
                      </div>
                    );
                  })}

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center animate-pulse-slow">
                      <div className="text-4xl mb-2">☉</div>
                      <p className="text-xs text-foreground/60">Солнце в Льве</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-6">
                <p className="text-foreground/60 text-sm">
                  Дата рождения: 15 августа 1995, 14:30 (Москва)
                </p>
                <Button variant="outline" className="mt-4">
                  <Icon name="Edit" size={18} className="mr-2" />
                  Изменить данные
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Icon name="Compass" className="text-primary" size={24} />
                Положение планет
              </h3>
              <div className="space-y-3">
                {planets.map((planet) => (
                  <div
                    key={planet.name}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/20 hover:bg-primary/5 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Icon name={planet.icon as any} className={planet.color} size={20} />
                      <span className="font-medium">{planet.name}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-foreground/70">{planet.sign}</span>
                      <Badge variant="outline" className="text-xs">Дом {planet.house}</Badge>
                      <span className="text-foreground/50 font-mono">{planet.degree}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Icon name="Link" className="text-primary" size={24} />
                Аспекты планет
              </h3>
              <div className="space-y-3">
                {aspects.map((aspect, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/20 hover:bg-primary/5 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{aspect.planet1}</span>
                        <Icon name="ArrowRight" size={16} className="text-primary/50" />
                        <span className="font-medium">{aspect.planet2}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline">{aspect.type}</Badge>
                      <span className="text-sm text-foreground/60">{aspect.angle}</span>
                      <Badge
                        className={
                          aspect.strength === "Очень сильный"
                            ? "bg-green-500/20 text-green-400"
                            : aspect.strength === "Напряжённый"
                            ? "bg-red-500/20 text-red-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }
                      >
                        {aspect.strength}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/30 cosmic-glow">
              <h3 className="text-xl font-semibold mb-4">Ключевые особенности</h3>
              <div className="space-y-4">
                <div className="p-4 bg-card/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Sun" className="text-orange-400" size={20} />
                    <span className="font-semibold">Солнце во Льве</span>
                  </div>
                  <p className="text-sm text-foreground/70">
                    Яркая личность с природным лидерством и творческим потенциалом
                  </p>
                </div>

                <div className="p-4 bg-card/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Moon" className="text-blue-300" size={20} />
                    <span className="font-semibold">Луна в Рыбах</span>
                  </div>
                  <p className="text-sm text-foreground/70">
                    Глубокая эмпатия, интуиция и богатый внутренний мир
                  </p>
                </div>

                <div className="p-4 bg-card/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="TrendingUp" className="text-green-400" size={20} />
                    <span className="font-semibold">Асцендент в Скорпионе</span>
                  </div>
                  <p className="text-sm text-foreground/70">
                    Магнетическая привлекательность и способность к трансформации
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="Home" className="text-primary" size={20} />
                Астрологические дома
              </h3>
              <div className="space-y-2">
                {houses.slice(0, 6).map((house) => (
                  <div
                    key={house.number}
                    className="p-3 rounded-lg bg-muted/20 hover:bg-primary/5 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5">{house.number}</Badge>
                      <div>
                        <p className="font-medium text-sm">{house.name}</p>
                        <p className="text-xs text-foreground/60">{house.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <Button variant="ghost" className="w-full text-primary text-sm">
                  Показать все дома
                  <Icon name="ChevronDown" size={16} className="ml-2" />
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="Download" className="text-primary" size={20} />
                Экспорт карты
              </h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="FileText" size={18} className="mr-2" />
                  Скачать PDF
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Image" size={18} className="mr-2" />
                  Сохранить как изображение
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Share2" size={18} className="mr-2" />
                  Поделиться
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NatalChart;
