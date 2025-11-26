import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Forum = () => {
  const categories = [
    { id: 1, name: "Астрология", icon: "Sparkles", posts: 342, color: "from-purple-500/20 to-indigo-500/20" },
    { id: 2, name: "Нумерология", icon: "Hash", posts: 156, color: "from-blue-500/20 to-cyan-500/20" },
    { id: 3, name: "Таро", icon: "Star", posts: 289, color: "from-pink-500/20 to-rose-500/20" },
    { id: 4, name: "Медитации", icon: "Circle", posts: 198, color: "from-green-500/20 to-emerald-500/20" },
    { id: 5, name: "Опыт и практика", icon: "Users", posts: 421, color: "from-orange-500/20 to-amber-500/20" }
  ];

  const topics = [
    {
      id: 1,
      title: "Как интерпретировать Сатурн в 7 доме?",
      author: "CosmicSeeker",
      authorLevel: 12,
      category: "Астрология",
      replies: 23,
      views: 145,
      lastActive: "5 минут назад",
      isPinned: true,
      zodiac: "♓"
    },
    {
      id: 2,
      title: "Мой опыт работы с числом жизненного пути 11",
      author: "Numerologist777",
      authorLevel: 8,
      category: "Нумерология",
      replies: 15,
      views: 89,
      lastActive: "1 час назад",
      isPinned: false,
      zodiac: "♏"
    },
    {
      id: 3,
      title: "Ретроградный Меркурий - что делать?",
      author: "StarGazer",
      authorLevel: 15,
      category: "Астрология",
      replies: 47,
      views: 312,
      lastActive: "2 часа назад",
      isPinned: true,
      zodiac: "♊"
    },
    {
      id: 4,
      title: "Техники медитации для начинающих",
      author: "ZenMaster",
      authorLevel: 20,
      category: "Медитации",
      replies: 62,
      views: 520,
      lastActive: "3 часа назад",
      isPinned: false,
      zodiac: "♍"
    },
    {
      id: 5,
      title: "Карта дня: Королева Кубков",
      author: "TarotReader",
      authorLevel: 11,
      category: "Таро",
      replies: 8,
      views: 67,
      lastActive: "4 часа назад",
      isPinned: false,
      zodiac: "♋"
    },
    {
      id: 6,
      title: "Соединение Венеры и Марса - ваши наблюдения?",
      author: "AstroLover",
      authorLevel: 9,
      category: "Астрология",
      replies: 31,
      views: 198,
      lastActive: "5 часов назад",
      isPinned: false,
      zodiac: "♎"
    }
  ];

  const activeUsers = [
    { name: "CosmicSeeker", level: 12, zodiac: "♓", status: "online" },
    { name: "StarGazer", level: 15, zodiac: "♊", status: "online" },
    { name: "ZenMaster", level: 20, zodiac: "♍", status: "away" },
    { name: "TarotReader", level: 11, zodiac: "♋", status: "online" }
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
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Форум сообщества</h1>
            <p className="text-foreground/70 text-lg">Обсуждайте астрологию и делитесь опытом</p>
          </div>
          <Button size="lg" className="cosmic-glow">
            <Icon name="Plus" size={20} className="mr-2" />
            Создать тему
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {categories.map((category) => (
            <Card
              key={category.id}
              className={`p-4 bg-gradient-to-br ${category.color} border-primary/20 hover:cosmic-glow transition-all cursor-pointer`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center">
                    <Icon name={category.icon as any} className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{category.name}</h3>
                    <p className="text-xs text-foreground/60">{category.posts} тем</p>
                  </div>
                </div>
                <Icon name="ChevronRight" className="text-foreground/40" size={20} />
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <Card className="p-4 bg-card/50 backdrop-blur-sm border-primary/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-2">
                  <Button variant="default" size="sm">Все темы</Button>
                  <Button variant="outline" size="sm">Популярные</Button>
                  <Button variant="outline" size="sm">Новые</Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Pin" size={14} className="mr-1" />
                    Закрепленные
                  </Button>
                </div>
              </div>
            </Card>

            {topics.map((topic) => (
              <Card
                key={topic.id}
                className={`p-5 bg-card/50 backdrop-blur-sm hover:cosmic-glow transition-all cursor-pointer ${
                  topic.isPinned ? 'border-primary/40' : 'border-primary/20'
                }`}
              >
                <div className="flex gap-4">
                  <Avatar className="w-12 h-12 border-2 border-primary/30">
                    <AvatarFallback className="bg-primary/20 text-2xl">
                      {topic.zodiac}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          {topic.isPinned && (
                            <Icon name="Pin" size={14} className="text-primary" />
                          )}
                          <h3 className="font-semibold text-lg hover:text-primary transition-colors">
                            {topic.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-foreground/60">
                          <span className="flex items-center gap-1">
                            <Icon name="User" size={14} />
                            {topic.author}
                          </span>
                          <Badge variant="outline" className="text-xs">
                            LVL {topic.authorLevel}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {topic.category}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/30">
                      <div className="flex items-center gap-4 text-sm text-foreground/60">
                        <span className="flex items-center gap-1">
                          <Icon name="MessageCircle" size={16} />
                          {topic.replies}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Eye" size={16} />
                          {topic.views}
                        </span>
                      </div>
                      <span className="text-xs text-foreground/50">{topic.lastActive}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            <div className="flex justify-center pt-4">
              <Button variant="outline" size="lg">
                Загрузить ещё
                <Icon name="ChevronDown" className="ml-2" size={18} />
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/30 cosmic-glow">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="TrendingUp" className="text-primary" size={20} />
                Статистика форума
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70 text-sm">Всего тем</span>
                  <span className="font-semibold text-lg">1,406</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70 text-sm">Сообщений</span>
                  <span className="font-semibold text-lg">8,942</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70 text-sm">Участников</span>
                  <span className="font-semibold text-lg">2,351</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70 text-sm">Онлайн</span>
                  <span className="font-semibold text-lg text-green-400">127</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="Users" className="text-primary" size={20} />
                Активные пользователи
              </h3>
              <div className="space-y-3">
                {activeUsers.map((user, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar className="w-10 h-10 border-2 border-primary/30">
                          <AvatarFallback className="bg-primary/20 text-xl">
                            {user.zodiac}
                          </AvatarFallback>
                        </Avatar>
                        <div
                          className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-card ${
                            user.status === "online" ? "bg-green-400" : "bg-yellow-400"
                          }`}
                        />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{user.name}</p>
                        <p className="text-xs text-foreground/60">Уровень {user.level}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="Info" className="text-primary" size={20} />
                Правила форума
              </h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-primary mt-0.5" />
                  <span>Уважайте мнение других участников</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-primary mt-0.5" />
                  <span>Не публикуйте оскорбительный контент</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-primary mt-0.5" />
                  <span>Делитесь полезной информацией</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-primary mt-0.5" />
                  <span>Создавайте темы в правильных категориях</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;
