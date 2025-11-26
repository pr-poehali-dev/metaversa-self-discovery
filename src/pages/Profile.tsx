import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Profile = () => {
  const [level] = useState(7);
  const [experience] = useState(2450);
  const [nextLevelXP] = useState(3000);

  const zodiacSigns = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];
  const [selectedSign] = useState("♌");

  const avatarParts = {
    body: "#9b87f5",
    eyes: "#D6BCFA",
    accessories: "#FEC6A1"
  };

  const achievements = [
    { id: 1, name: "Первый квест", icon: "Award", unlocked: true },
    { id: 2, name: "Натальная карта", icon: "Compass", unlocked: true },
    { id: 3, name: "Мастер нумерологии", icon: "Hash", unlocked: false },
    { id: 4, name: "Социальная звезда", icon: "Users", unlocked: true },
    { id: 5, name: "Коллекционер", icon: "Star", unlocked: false },
    { id: 6, name: "Гуру медитации", icon: "Circle", unlocked: false }
  ];

  const stats = [
    { label: "Пройдено квестов", value: 12, icon: "Target" },
    { label: "Достижений", value: 8, icon: "Award" },
    { label: "Дней в AstroVerse", value: 45, icon: "Calendar" },
    { label: "Друзей", value: 23, icon: "Users" }
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
              <Link to="/quests" className="text-foreground/80 hover:text-primary transition-colors">Квесты</Link>
              <Link to="/natal" className="text-foreground/80 hover:text-primary transition-colors">Натальная карта</Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 cosmic-glow">
              <div className="text-center">
                <div className="relative inline-block mb-4">
                  <div className="w-40 h-40 rounded-full mx-auto relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary/50 cosmic-glow flex items-center justify-center">
                    <div className="text-6xl animate-float">{selectedSign}</div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      Уровень {level}
                    </Badge>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mb-1">Cosmic Traveler</h2>
                <p className="text-foreground/60 mb-4">Исследователь звёзд</p>
                
                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground/70">Опыт</span>
                    <span className="text-primary font-semibold">{experience} / {nextLevelXP}</span>
                  </div>
                  <Progress value={(experience / nextLevelXP) * 100} className="h-2" />
                </div>
                
                <Button className="w-full mt-4" variant="outline">
                  <Icon name="Palette" className="mr-2" size={18} />
                  Настроить аватар
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="Sparkles" size={20} className="text-primary" />
                Статистика
              </h3>
              <div className="space-y-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon name={stat.icon as any} size={18} className="text-primary/70" />
                      <span className="text-foreground/70 text-sm">{stat.label}</span>
                    </div>
                    <span className="font-semibold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Tabs defaultValue="achievements" className="w-full">
              <TabsList className="w-full grid grid-cols-3">
                <TabsTrigger value="achievements">Достижения</TabsTrigger>
                <TabsTrigger value="quests">Квесты</TabsTrigger>
                <TabsTrigger value="settings">Настройки</TabsTrigger>
              </TabsList>

              <TabsContent value="achievements" className="space-y-4 mt-6">
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
                  <h3 className="text-xl font-semibold mb-6">Ваши достижения</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {achievements.map((achievement) => (
                      <Card
                        key={achievement.id}
                        className={`p-4 text-center transition-all cursor-pointer ${
                          achievement.unlocked
                            ? 'bg-primary/10 border-primary/30 hover:cosmic-glow'
                            : 'bg-muted/10 border-muted/20 opacity-50'
                        }`}
                      >
                        <div className={`w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center ${
                          achievement.unlocked ? 'bg-primary/20' : 'bg-muted/20'
                        }`}>
                          <Icon
                            name={achievement.icon as any}
                            size={28}
                            className={achievement.unlocked ? 'text-primary' : 'text-muted-foreground'}
                          />
                        </div>
                        <p className="text-sm font-medium">{achievement.name}</p>
                        {achievement.unlocked && (
                          <Badge variant="outline" className="mt-2 text-xs">Получено</Badge>
                        )}
                      </Card>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="quests" className="space-y-4 mt-6">
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
                  <h3 className="text-xl font-semibold mb-6">Активные квесты</h3>
                  <div className="space-y-4">
                    <Card className="p-4 bg-primary/5 border-primary/20 hover:cosmic-glow transition-all cursor-pointer">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                            <Icon name="Moon" className="text-primary" size={20} />
                          </div>
                          <div>
                            <h4 className="font-semibold">Лунный путь</h4>
                            <p className="text-sm text-foreground/60">Изучите влияние Луны</p>
                          </div>
                        </div>
                        <Badge className="bg-primary/20 text-primary">+150 XP</Badge>
                      </div>
                      <Progress value={65} className="h-1.5" />
                      <p className="text-xs text-foreground/60 mt-2">65% завершено</p>
                    </Card>

                    <Card className="p-4 bg-primary/5 border-primary/20 hover:cosmic-glow transition-all cursor-pointer">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                            <Icon name="Sun" className="text-primary" size={20} />
                          </div>
                          <div>
                            <h4 className="font-semibold">Солнечная энергия</h4>
                            <p className="text-sm text-foreground/60">Откройте силу Солнца</p>
                          </div>
                        </div>
                        <Badge className="bg-primary/20 text-primary">+200 XP</Badge>
                      </div>
                      <Progress value={30} className="h-1.5" />
                      <p className="text-xs text-foreground/60 mt-2">30% завершено</p>
                    </Card>

                    <Card className="p-4 bg-primary/5 border-primary/20 hover:cosmic-glow transition-all cursor-pointer">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                            <Icon name="Star" className="text-primary" size={20} />
                          </div>
                          <div>
                            <h4 className="font-semibold">Звёздный коллектор</h4>
                            <p className="text-sm text-foreground/60">Соберите 10 звёзд</p>
                          </div>
                        </div>
                        <Badge className="bg-primary/20 text-primary">+100 XP</Badge>
                      </div>
                      <Progress value={80} className="h-1.5" />
                      <p className="text-xs text-foreground/60 mt-2">8/10 звёзд</p>
                    </Card>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="space-y-4 mt-6">
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
                  <h3 className="text-xl font-semibold mb-6">Настройки профиля</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Знак зодиака</label>
                      <div className="grid grid-cols-6 gap-2">
                        {zodiacSigns.map((sign) => (
                          <Button
                            key={sign}
                            variant={sign === selectedSign ? "default" : "outline"}
                            className="text-2xl h-12"
                          >
                            {sign}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Цветовая схема аватара</label>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="flex flex-col items-center gap-2">
                          <div
                            className="w-16 h-16 rounded-full cursor-pointer border-2 border-primary"
                            style={{ background: avatarParts.body }}
                          />
                          <span className="text-xs text-foreground/60">Тело</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <div
                            className="w-16 h-16 rounded-full cursor-pointer border-2 border-border"
                            style={{ background: avatarParts.eyes }}
                          />
                          <span className="text-xs text-foreground/60">Глаза</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <div
                            className="w-16 h-16 rounded-full cursor-pointer border-2 border-border"
                            style={{ background: avatarParts.accessories }}
                          />
                          <span className="text-xs text-foreground/60">Аксессуары</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <Button className="w-full">
                        <Icon name="Save" className="mr-2" size={18} />
                        Сохранить изменения
                      </Button>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
