import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Quests = () => {
  const questCategories = [
    { id: "all", name: "Все", icon: "Layers" },
    { id: "daily", name: "Ежедневные", icon: "Calendar" },
    { id: "planets", name: "Планеты", icon: "Globe" },
    { id: "elements", name: "Стихии", icon: "Flame" },
    { id: "special", name: "Особые", icon: "Sparkles" }
  ];

  const quests = [
    {
      id: 1,
      title: "Медитация на Меркурий",
      description: "Настройтесь на энергию Меркурия и улучшите коммуникативные навыки",
      difficulty: "Легко",
      reward: 150,
      progress: 0,
      category: "planets",
      icon: "MessageCircle",
      color: "from-blue-500/20 to-cyan-500/20",
      timeLimit: "3 дня",
      requirements: ["Уровень 5+", "Базовые знания астрологии"]
    },
    {
      id: 2,
      title: "Путь огненной стихии",
      description: "Исследуйте силу огня через знаки Овен, Лев и Стрелец",
      difficulty: "Средне",
      reward: 300,
      progress: 45,
      category: "elements",
      icon: "Flame",
      color: "from-orange-500/20 to-red-500/20",
      timeLimit: "7 дней",
      requirements: ["Уровень 8+", "Завершён квест 'Стихии'"]
    },
    {
      id: 3,
      title: "Лунные циклы",
      description: "Следите за фазами Луны и изучите их влияние на вашу жизнь",
      difficulty: "Легко",
      reward: 200,
      progress: 75,
      category: "planets",
      icon: "Moon",
      color: "from-purple-500/20 to-indigo-500/20",
      timeLimit: "28 дней",
      requirements: ["Уровень 3+"]
    },
    {
      id: 4,
      title: "Великое соединение",
      description: "Изучите редкое астрологическое событие и его значение",
      difficulty: "Сложно",
      reward: 500,
      progress: 20,
      category: "special",
      icon: "Zap",
      color: "from-yellow-500/20 to-orange-500/20",
      timeLimit: "14 дней",
      requirements: ["Уровень 12+", "Премиум подписка", "3+ завершённых квеста"]
    },
    {
      id: 5,
      title: "Водная гармония",
      description: "Погрузитесь в мир эмоций через знаки водной стихии",
      difficulty: "Средне",
      reward: 250,
      progress: 0,
      category: "elements",
      icon: "Droplet",
      color: "from-blue-500/20 to-teal-500/20",
      timeLimit: "7 дней",
      requirements: ["Уровень 6+"]
    },
    {
      id: 6,
      title: "Ежедневная практика",
      description: "Выполните медитацию и запишите астрологические наблюдения",
      difficulty: "Легко",
      reward: 50,
      progress: 100,
      category: "daily",
      icon: "Check",
      color: "from-green-500/20 to-emerald-500/20",
      timeLimit: "Сегодня",
      requirements: ["Нет требований"]
    }
  ];

  const difficultyColors: Record<string, string> = {
    "Легко": "bg-green-500/20 text-green-400 border-green-500/30",
    "Средне": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    "Сложно": "bg-red-500/20 text-red-400 border-red-500/30"
  };

  return (
    <div className="min-h-screen">
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Icon name="Sparkles" className="text-primary" size={28} />
              <span className="text-xl font-bold text-gradient">Natana</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link to="/" className="text-foreground/80 hover:text-primary transition-colors">Главная</Link>
              <Link to="/profile" className="text-foreground/80 hover:text-primary transition-colors">Профиль</Link>
              <Link to="/natal" className="text-foreground/80 hover:text-primary transition-colors">Натальная карта</Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3">Астрологические квесты</h1>
          <p className="text-foreground/70 text-lg">Проходите задания, получайте опыт и открывайте новые грани самопознания</p>
        </div>

        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {questCategories.map((category) => (
            <Button
              key={category.id}
              variant={category.id === "all" ? "default" : "outline"}
              className="whitespace-nowrap"
            >
              <Icon name={category.icon as any} size={18} className="mr-2" />
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {quests.map((quest) => (
            <Card
              key={quest.id}
              className={`p-6 bg-gradient-to-br ${quest.color} border-primary/20 hover:cosmic-glow transition-all cursor-pointer animate-fade-in`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center animate-pulse-slow">
                    <Icon name={quest.icon as any} className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{quest.title}</h3>
                    <div className="flex items-center gap-2">
                      <Badge className={difficultyColors[quest.difficulty]}>
                        {quest.difficulty}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        <Icon name="Clock" size={12} className="mr-1" />
                        {quest.timeLimit}
                      </Badge>
                    </div>
                  </div>
                </div>
                <Badge className="bg-accent/20 text-accent-foreground border-accent/30">
                  +{quest.reward} XP
                </Badge>
              </div>

              <p className="text-foreground/70 mb-4">{quest.description}</p>

              <div className="space-y-3 mb-4">
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-foreground/60">Прогресс</span>
                    <span className="text-primary font-semibold">{quest.progress}%</span>
                  </div>
                  <Progress value={quest.progress} className="h-2" />
                </div>

                <div className="pt-3 border-t border-border/30">
                  <p className="text-sm text-foreground/60 mb-2">Требования:</p>
                  <div className="flex flex-wrap gap-2">
                    {quest.requirements.map((req, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {req}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                {quest.progress === 0 && (
                  <Button className="flex-1">
                    <Icon name="Play" size={18} className="mr-2" />
                    Начать квест
                  </Button>
                )}
                {quest.progress > 0 && quest.progress < 100 && (
                  <Button className="flex-1">
                    <Icon name="PlayCircle" size={18} className="mr-2" />
                    Продолжить
                  </Button>
                )}
                {quest.progress === 100 && (
                  <Button className="flex-1 bg-green-500/20 hover:bg-green-500/30 text-green-400 border-green-500/30">
                    <Icon name="CheckCircle" size={18} className="mr-2" />
                    Завершено
                  </Button>
                )}
                <Button variant="outline" size="icon">
                  <Icon name="Info" size={18} />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-8 p-8 bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/30 cosmic-glow text-center">
          <Icon name="Gift" className="mx-auto mb-4 text-primary animate-float" size={48} />
          <h3 className="text-2xl font-bold mb-2">Премиум квесты</h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Получите доступ к эксклюзивным квестам с уникальными наградами и углублённым изучением астрологии
          </p>
          <Button size="lg" className="text-lg px-8">
            <Icon name="Crown" size={20} className="mr-2" />
            Подключить Premium
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Quests;