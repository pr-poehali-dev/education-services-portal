import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [workType, setWorkType] = useState('');
  const [complexity, setComplexity] = useState([1]);
  const [pages, setPages] = useState([10]);
  const [deadline, setDeadline] = useState([7]);

  const calculatePrice = () => {
    const basePrice = {
      'essay': 500,
      'diploma': 2000,
      'coursework': 1200,
      'report': 800,
      'presentation': 600
    };
    
    const complexityMultiplier = complexity[0];
    const pageMultiplier = pages[0];
    const deadlineMultiplier = deadline[0] <= 3 ? 2 : deadline[0] <= 7 ? 1.5 : 1;
    
    const base = basePrice[workType] || 500;
    return Math.round(base * complexityMultiplier * (pageMultiplier / 10) * deadlineMultiplier);
  };

  const services = [
    {
      title: 'Дипломные работы',
      description: 'Качественные дипломные проекты с уникальностью от 80%',
      icon: 'GraduationCap',
      price: 'от 15,000 ₽'
    },
    {
      title: 'Курсовые работы', 
      description: 'Профессиональные курсовые по всем дисциплинам',
      icon: 'BookOpen',
      price: 'от 3,000 ₽'
    },
    {
      title: 'Рефераты и эссе',
      description: 'Быстрое выполнение рефератов и эссе любой сложности',
      icon: 'FileText',
      price: 'от 800 ₽'
    },
    {
      title: 'Отчеты по практике',
      description: 'Детальные отчеты с анализом и выводами', 
      icon: 'ClipboardCheck',
      price: 'от 2,500 ₽'
    }
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      rating: 5,
      text: 'Отличная работа! Диплом сдала на отлично, все требования соблюдены.',
      work: 'Дипломная работа'
    },
    {
      name: 'Михаил Иванов', 
      rating: 5,
      text: 'Курсовая выполнена в срок, качество на высоте. Рекомендую!',
      work: 'Курсовая работа'
    },
    {
      name: 'Елена Сидорова',
      rating: 5, 
      text: 'Помогли с отчетом по практике. Все четко и профессионально.',
      work: 'Отчет по практике'
    }
  ];

  const faq = [
    {
      question: 'Гарантируете ли вы уникальность работ?',
      answer: 'Да, все работы проходят проверку на антиплагиат. Гарантируем уникальность от 80%.'
    },
    {
      question: 'В какие сроки выполняются работы?',
      answer: 'Сроки зависят от типа и сложности работы. Минимальный срок - 3 дня, стандартный - 7-14 дней.'
    },
    {
      question: 'Можно ли вносить правки в готовую работу?',
      answer: 'Да, мы предоставляем бесплатные правки в течение 30 дней после сдачи работы.'
    },
    {
      question: 'Какие способы оплаты вы принимаете?',
      answer: 'Принимаем оплату картой, через СБП, Яндекс.Деньги и другие популярные системы.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="GraduationCap" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-gray-900">StudyHelp</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#calculator" className="text-gray-600 hover:text-primary transition-colors">Калькулятор</a>
              <a href="#reviews" className="text-gray-600 hover:text-primary transition-colors">Отзывы</a>
              <a href="#faq" className="text-gray-600 hover:text-primary transition-colors">FAQ</a>
              <a href="#contacts" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-blue-600">
              Заказать работу
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-5xl font-bold leading-tight">
                Качественные учебные работы для студентов
              </h2>
              <p className="text-xl text-blue-100">
                Дипломы, курсовые, рефераты и отчеты от профессиональных авторов. 
                Гарантируем уникальность и соблюдение всех требований.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-secondary hover:bg-red-500 text-white px-8 py-4 text-lg">
                  <Icon name="Calculator" className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
                  <Icon name="MessageCircle" className="mr-2" />
                  Получить консультацию
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">5000+</div>
                  <div className="text-blue-200">Выполненных работ</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-blue-200">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-blue-200">Поддержка</div>
                </div>
              </div>
            </div>
            <div className="lg:pl-8">
              <img 
                src="/img/c628976b-1a4a-48a3-8c7e-58c2a7da9502.jpg" 
                alt="Образование" 
                className="w-full h-auto rounded-2xl shadow-2xl animate-scale-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Предоставляем полный спектр услуг по написанию учебных работ для студентов всех специальностей
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover-scale group">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <Badge className="bg-secondary text-white">{service.price}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Калькулятор стоимости</h2>
            <p className="text-xl text-gray-600">
              Рассчитайте стоимость вашей работы за несколько кликов
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Тип работы
                      </label>
                      <Select value={workType} onValueChange={setWorkType}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тип работы" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="essay">Реферат/Эссе</SelectItem>
                          <SelectItem value="coursework">Курсовая работа</SelectItem>
                          <SelectItem value="diploma">Дипломная работа</SelectItem>
                          <SelectItem value="report">Отчет по практике</SelectItem>
                          <SelectItem value="presentation">Презентация</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Сложность: {complexity[0]}/5
                      </label>
                      <Slider
                        value={complexity}
                        onValueChange={setComplexity}
                        max={5}
                        min={1}
                        step={1}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Количество страниц: {pages[0]}
                      </label>
                      <Slider
                        value={pages}
                        onValueChange={setPages}
                        max={100}
                        min={1}
                        step={1}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Срок выполнения: {deadline[0]} дней
                      </label>
                      <Slider
                        value={deadline}
                        onValueChange={setDeadline}
                        max={30}
                        min={1}
                        step={1}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-primary to-blue-600 text-white p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold mb-6">Расчет стоимости</h3>
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between">
                        <span>Тип работы:</span>
                        <span>{workType || 'Не выбрано'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Сложность:</span>
                        <span>{complexity[0]}/5</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Страниц:</span>
                        <span>{pages[0]}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Срок:</span>
                        <span>{deadline[0]} дней</span>
                      </div>
                      <hr className="border-blue-300" />
                      <div className="flex justify-between text-2xl font-bold">
                        <span>Итого:</span>
                        <span>{workType ? `${calculatePrice().toLocaleString()} ₽` : '---'}</span>
                      </div>
                    </div>
                    <Button className="w-full bg-secondary hover:bg-red-500 text-white py-3 text-lg">
                      <Icon name="ShoppingCart" className="mr-2" />
                      Заказать сейчас
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Отзывы студентов</h2>
            <p className="text-xl text-gray-600">
              Более 5000 довольных клиентов уже воспользовались нашими услугами
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={20} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.work}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h2>
            <p className="text-xl text-gray-600">
              Ответы на самые популярные вопросы о наших услугах
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6">
                  <AccordionTrigger className="text-left font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-2">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600">
              Готовы ответить на все ваши вопросы и помочь с заказом
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Icon name="Phone" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                <p className="text-gray-600">+7 (999) 123-45-67</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Icon name="Mail" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600">info@studyhelp.ru</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Icon name="MessageCircle" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Мессенджеры</h3>
                <p className="text-gray-600">WhatsApp, Telegram</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Готовы начать работу над вашим проектом?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами сегодня и получите качественную учебную работу в срок
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-red-500 text-white px-8 py-4 text-lg">
              <Icon name="Calculator" className="mr-2" />
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
              <Icon name="Phone" className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="GraduationCap" size={32} className="text-primary" />
                <h3 className="text-2xl font-bold">StudyHelp</h3>
              </div>
              <p className="text-gray-400">
                Профессиональная помощь студентам в написании учебных работ любой сложности.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Дипломные работы</li>
                <li>Курсовые работы</li>
                <li>Рефераты и эссе</li>
                <li>Отчеты по практике</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О нас</li>
                <li>Гарантии</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (999) 123-45-67</p>
                <p>info@studyhelp.ru</p>
                <p>Работаем 24/7</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 StudyHelp. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;