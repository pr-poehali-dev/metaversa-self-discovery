import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent" />
        
        <header className="relative z-10 container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Sparkles" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-gradient">AstroVerse</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-foreground/80 hover:text-primary transition-colors">Главная</Link>
              <Link to="/profile" className="text-foreground/80 hover:text-primary transition-colors">Профиль</Link>
              <Link to="/quests" className="text-foreground/80 hover:text-primary transition-colors">Квесты</Link>
              <Link to="/natal" className="text-foreground/80 hover:text-primary transition-colors">Натальная карта</Link>
              <Link to="/forum" className="text-foreground/80 hover:text-primary transition-colors">Форум</Link>
            </div>
            <Button className="cosmic-glow">Войти</Button>
          </nav>
        </header>

        <section className="relative z-10 container mx-auto px-4 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Откройте свою <span className="text-gradient">космическую</span> судьбу
            </h1>
            <p className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto">
              Геймифицированная метавселенная для самопознания через астрологию, нумерологию и искусственный интеллект
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/profile">
                <Button size="lg" className="cosmic-glow text-lg px-8">
                  Начать путешествие
                  <Icon name="Rocket" className="ml-2" size={20} />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Узнать больше
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-20 animate-slide-up">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover:cosmic-glow cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 animate-pulse-slow">
                <Icon name="User" className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Персональный аватар</h3>
              <p className="text-foreground/70">Создайте уникального 2D аватара на основе вашей натальной карты</p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover:cosmic-glow cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 animate-pulse-slow">
                <Icon name="Target" className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Астрологические квесты</h3>
              <p className="text-foreground/70">Проходите задания, развивайтесь и открывайте новые грани себя</p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover:cosmic-glow cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 animate-pulse-slow">
                <Icon name="Award" className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Система достижений</h3>
              <p className="text-foreground/70">Получайте награды за прогресс и открывайте новые возможности</p>
            </Card>
          </div>
        </section>

        <section className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Возможности метавселенной</h2>
            <p className="text-foreground/70 text-lg">Все инструменты для вашего самопознания в одном месте</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:cosmic-glow transition-all">
              <Icon name="Compass" className="text-primary mb-4 animate-float" size={40} />
              <h3 className="text-2xl font-semibold mb-3">Натальная карта</h3>
              <p className="text-foreground/70 mb-4">Получите детальный анализ вашей натальной карты с интерактивной визуализацией планет и домов</p>
              <Button variant="ghost" className="p-0 h-auto text-primary">
                Узнать подробнее <Icon name="ArrowRight" className="ml-2" size={16} />
              </Button>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:cosmic-glow transition-all">
              <Icon name="Hash" className="text-primary mb-4 animate-float" size={40} />
              <h3 className="text-2xl font-semibold mb-3">Нумерология</h3>
              <p className="text-foreground/70 mb-4">Раскройте тайны чисел вашего рождения и узнайте свой жизненный путь</p>
              <Button variant="ghost" className="p-0 h-auto text-primary">
                Узнать подробнее <Icon name="ArrowRight" className="ml-2" size={16} />
              </Button>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:cosmic-glow transition-all">
              <Icon name="Users" className="text-primary mb-4 animate-float" size={40} />
              <h3 className="text-2xl font-semibold mb-3">Форум и сообщество</h3>
              <p className="text-foreground/70 mb-4">Общайтесь с единомышленниками, делитесь опытом и находите новых друзей</p>
              <Button variant="ghost" className="p-0 h-auto text-primary">
                Узнать подробнее <Icon name="ArrowRight" className="ml-2" size={16} />
              </Button>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:cosmic-glow transition-all">
              <Icon name="BookOpen" className="text-primary mb-4 animate-float" size={40} />
              <h3 className="text-2xl font-semibold mb-3">База знаний</h3>
              <p className="text-foreground/70 mb-4">Статьи и материалы по астрологии, нумерологии и эзотерике от экспертов</p>
              <Button variant="ghost" className="p-0 h-auto text-primary">
                Узнать подробнее <Icon name="ArrowRight" className="ml-2" size={16} />
              </Button>
            </Card>
          </div>
        </section>

        <section className="relative z-10 container mx-auto px-4 py-20">
          <Card className="p-12 bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/30 cosmic-glow text-center">
            <h2 className="text-4xl font-bold mb-4">Готовы начать своё путешествие?</h2>
            <p className="text-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к тысячам пользователей, которые уже открыли свой космический потенциал
            </p>
            <Link to="/profile">
              <Button size="lg" className="text-lg px-10">
                Создать профиль бесплатно
                <Icon name="Sparkles" className="ml-2" size={20} />
              </Button>
            </Link>
          </Card>
        </section>
      </div>

      <footer className="relative z-10 border-t border-border/50 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Sparkles" className="text-primary" size={24} />
              <span className="font-semibold">AstroVerse</span>
            </div>
            <div className="flex gap-6 text-sm text-foreground/60">
              <a href="#" className="hover:text-primary transition-colors">О проекте</a>
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <div className="text-sm text-foreground/60">
              © 2024 AstroVerse. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
