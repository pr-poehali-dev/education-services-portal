import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [workType, setWorkType] = useState('');
  const [complexity, setComplexity] = useState([3]);
  const [pages, setPages] = useState([15]);
  const [deadline, setDeadline] = useState([7]);
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);

  const calculatePrice = () => {
    const basePrice = {
      'essay': 800,
      'coursework': 2500,
      'diploma': 8000,
      'report': 1500,
      'presentation': 1200,
      'abstract': 600
    };
    
    const complexityMultiplier = complexity[0] * 0.3;
    const pageMultiplier = pages[0];
    const deadlineMultiplier = deadline[0] <= 3 ? 2.5 : deadline[0] <= 7 ? 1.8 : deadline[0] <= 14 ? 1.3 : 1;
    
    const base = basePrice[workType] || 800;
    return Math.round(base + (complexityMultiplier * pageMultiplier * deadlineMultiplier * 100));
  };

  const services = [
    {
      title: 'Дипломные работы',
      description: 'Профессиональное выполнение дипломных проектов с уникальностью от 85%',
      icon: 'GraduationCap',
      price: 'от 25,000 ₽',
      features: ['Уникальность 85%+', 'Защита диплома', 'Бесплатные правки']
    },
    {
      title: 'Курсовые работы', 
      description: 'Качественные курсовые по всем дисциплинам с соблюдением требований ВУЗа',
      icon: 'BookOpen',
      price: 'от 5,000 ₽',
      features: ['Все специальности', 'Оформление по ГОСТ', 'Срок от 3 дней']
    },
    {
      title: 'Рефераты и эссе',
      description: 'Быстрое написание рефератов и эссе любой тематики и сложности',
      icon: 'FileText',
      price: 'от 1,200 ₽',
      features: ['Любая тематика', 'Быстрое выполнение', 'Доступные цены']
    },
    {
      title: 'Отчеты по практике',
      description: 'Детальные отчеты с анализом деятельности предприятия и выводами', 
      icon: 'ClipboardList',
      price: 'от 3,500 ₽',
      features: ['Анализ предприятия', 'Практические выводы', 'Оформление']
    },
    {
      title: 'Контрольные работы',
      description: 'Решение контрольных работ по математике, физике, химии и другим предметам',
      icon: 'Calculator',
      price: 'от 800 ₽',
      features: ['Точные науки', 'Пошаговое решение', 'Проверка']
    },
    {
      title: 'Презентации',
      description: 'Создание качественных презентаций PowerPoint для защиты работ',
      icon: 'Monitor',
      price: 'от 2,000 ₽',
      features: ['Дизайн слайдов', 'Анимация', 'Готовность к защите']
    }
  ];

  const reviews = [
    {
      name: 'Мария Козлова',
      university: 'МГУ им. Ломоносова',
      rating: 5,
      text: 'Заказывала дипломную работу по экономике. Результат превзошёл все ожидания! Защитилась на отлично, комиссия отметила высокое качество исследования.',
      work: 'Дипломная работа',
      avatar: '👩‍🎓'
    },
    {
      name: 'Андрей Смирнов', 
      university: 'СПбГУ',
      rating: 5,
      text: 'Курсовая по программированию была выполнена точно в срок. Код работает отлично, документация подробная. Преподаватель поставил 5!',
      work: 'Курсовая работа',
      avatar: '👨‍💻'
    },
    {
      name: 'Елена Петрова',
      university: 'МГИМО',
      rating: 5, 
      text: 'Нужен был срочный реферат по международному праву. Сделали за 2 дня, качество на высоте. Спасибо за профессионализм!',
      work: 'Реферат',
      avatar: '👩‍⚖️'
    },
    {
      name: 'Дмитрий Волков',
      university: 'МФТИ',
      rating: 5,
      text: 'Отчёт по практике в IT-компании получился очень подробным. Все расчёты правильные, анализ глубокий. Рекомендую!',
      work: 'Отчёт по практике',
      avatar: '👨‍🔬'
    }
  ];

  const stats = [
    { number: '8500+', label: 'Выполненных работ', icon: 'CheckCircle' },
    { number: '99%', label: 'Довольных клиентов', icon: 'Heart' },
    { number: '24/7', label: 'Поддержка клиентов', icon: 'Clock' },
    { number: '5 лет', label: 'Опыт работы', icon: 'Award' }
  ];

  const faq = [
    {
      question: 'Гарантируете ли вы уникальность работ?',
      answer: 'Да, все работы проходят проверку в системах антиплагиат. Гарантируем уникальность от 80% для рефератов и от 85% для дипломных работ. При необходимости предоставляем отчёт о проверке.'
    },
    {
      question: 'В какие сроки выполняются работы?',
      answer: 'Сроки зависят от типа и объёма работы: рефераты - от 1 дня, курсовые - от 3 дней, дипломы - от 14 дней. Возможно срочное выполнение за дополнительную плату.'
    },
    {
      question: 'Можно ли вносить правки в готовую работу?',
      answer: 'Конечно! Мы предоставляем бесплатные правки в течение 30 дней после сдачи работы. Если требуются существенные изменения концепции, обсуждаем дополнительную оплату.'
    },
    {
      question: 'Какие способы оплаты вы принимаете?',
      answer: 'Принимаем оплату банковскими картами, через СБП, Яндекс.Деньги, QIWI, WebMoney. Возможна предоплата 50% и доплата после получения готовой работы.'
    },
    {
      question: 'Работаете ли вы с любыми специальностями?',
      answer: 'Да, у нас команда экспертов по всем направлениям: гуманитарные, технические, естественные науки, экономика, юриспруденция, медицина и другие.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-blue-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                <Icon name="GraduationCap" size={28} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  EduPro
                </h1>
                <p className="text-xs text-gray-500">Образовательные услуги</p>
              </div>
            </div>
            <nav className="hidden lg:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Услуги</a>
              <a href="#calculator" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Калькулятор</a>
              <a href="#reviews" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Отзывы</a>
              <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">FAQ</a>
              <a href="#contacts" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Контакты</a>
            </nav>
            <Button 
              onClick={() => setIsOrderFormOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium"
            >
              Заказать работу
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-blue-100 text-blue-700 border-blue-200 px-4 py-2 text-sm font-medium">
                  ✨ Профессиональные образовательные услуги
                </Badge>
                <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Качественные
                  </span>
                  <br />
                  учебные работы для студентов
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Дипломы, курсовые, рефераты и отчёты от экспертов с многолетним опытом. 
                  Гарантируем высокое качество, уникальность и соблюдение всех требований ВУЗа.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-lg font-medium"
                  onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Icon name="Calculator" className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg rounded-lg font-medium"
                >
                  <Icon name="MessageCircle" className="mr-2" />
                  Бесплатная консультация
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <Icon name={stat.icon} size={24} className="text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:pl-8">
              <div className="relative">
                <img 
                  src="/img/06570c66-9650-4089-998f-0f4ddc86eb2d.jpg" 
                  alt="Студенты изучают материалы" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Icon name="CheckCircle" className="text-green-600" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Работа сдана!</div>
                      <div className="text-sm text-gray-600">Оценка: Отлично</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 border-purple-200 px-4 py-2 text-sm font-medium mb-4">
              Наши услуги
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Полный спектр образовательных услуг</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Предоставляем профессиональную помощь студентам всех специальностей и уровней образования
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                    <Icon name={service.icon} size={32} className="text-blue-600 group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-blue-600 transition-colors">{service.title}</CardTitle>
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">{service.price}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-center">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <Icon name="Check" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white mt-4">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 px-4 py-2 text-sm font-medium mb-4">
              Калькулятор стоимости
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Узнайте стоимость вашей работы</h2>
            <p className="text-xl text-gray-600">
              Рассчитайте примерную стоимость за несколько секунд
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Card className="shadow-2xl border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2">
                  <div className="p-8 space-y-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">Параметры работы</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Тип работы
                        </label>
                        <Select value={workType} onValueChange={setWorkType}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Выберите тип работы" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="essay">Реферат/Эссе</SelectItem>
                            <SelectItem value="coursework">Курсовая работа</SelectItem>
                            <SelectItem value="diploma">Дипломная работа</SelectItem>
                            <SelectItem value="report">Отчёт по практике</SelectItem>
                            <SelectItem value="presentation">Презентация</SelectItem>
                            <SelectItem value="abstract">Контрольная работа</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Уровень сложности: <span className="text-blue-600 font-semibold">{complexity[0]}/5</span>
                        </label>
                        <Slider
                          value={complexity}
                          onValueChange={setComplexity}
                          max={5}
                          min={1}
                          step={1}
                          className="w-full"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-2">
                          <span>Простая</span>
                          <span>Сложная</span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Количество страниц: <span className="text-blue-600 font-semibold">{pages[0]}</span>
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
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Срок выполнения: <span className="text-blue-600 font-semibold">{deadline[0]} дней</span>
                        </label>
                        <Slider
                          value={deadline}
                          onValueChange={setDeadline}
                          max={30}
                          min={1}
                          step={1}
                          className="w-full"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-2">
                          <span>Срочно</span>
                          <span>Стандарт</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-8">
                    <h3 className="text-2xl font-bold mb-6">Расчёт стоимости</h3>
                    
                    <div className="space-y-4 mb-8">
                      <div className="bg-white/10 rounded-lg p-4 space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-blue-100">Тип работы:</span>
                          <span className="font-medium">{
                            workType === 'essay' ? 'Реферат/Эссе' :
                            workType === 'coursework' ? 'Курсовая' :
                            workType === 'diploma' ? 'Диплом' :
                            workType === 'report' ? 'Отчёт' :
                            workType === 'presentation' ? 'Презентация' :
                            workType === 'abstract' ? 'Контрольная' :
                            'Не выбрано'
                          }</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-blue-100">Сложность:</span>
                          <span className="font-medium">{complexity[0]}/5</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-blue-100">Страниц:</span>
                          <span className="font-medium">{pages[0]}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-blue-100">Срок:</span>
                          <span className="font-medium">{deadline[0]} дней</span>
                        </div>
                      </div>
                      
                      <div className="border-t border-white/20 pt-4">
                        <div className="flex justify-between items-center text-2xl font-bold">
                          <span>Стоимость:</span>
                          <span className="text-yellow-300">
                            {workType ? `${calculatePrice().toLocaleString()} ₽` : '--- ₽'}
                          </span>
                        </div>
                        <p className="text-blue-100 text-sm mt-2">*Окончательная цена может отличаться</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Button 
                        className="w-full bg-white text-blue-600 hover:bg-blue-50 py-3 text-lg font-semibold"
                        onClick={() => setIsOrderFormOpen(true)}
                      >
                        <Icon name="ShoppingCart" className="mr-2" />
                        Заказать сейчас
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full border-white text-white hover:bg-white hover:text-blue-600 py-3"
                      >
                        <Icon name="MessageCircle" className="mr-2" />
                        Получить консультацию
                      </Button>
                    </div>
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
            <Badge className="bg-green-100 text-green-700 border-green-200 px-4 py-2 text-sm font-medium mb-4">
              Отзывы студентов
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Что говорят наши клиенты</h2>
            <p className="text-xl text-gray-600">
              Более 8500 студентов уже получили качественные работы
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{review.avatar}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{review.name}</h4>
                      <p className="text-sm text-gray-600">{review.university}</p>
                    </div>
                  </div>
                  
                  <div className="flex text-yellow-400 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} fill="currentColor" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 italic">"{review.text}"</p>
                  
                  <div className="border-t pt-3">
                    <Badge variant="outline" className="text-xs">
                      {review.work}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-700 border-orange-200 px-4 py-2 text-sm font-medium mb-4">
              Вопросы и ответы
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h2>
            <p className="text-xl text-gray-600">
              Ответы на самые популярные вопросы о наших услугах
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl shadow-lg border-0 px-6">
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
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
            <Badge className="bg-purple-100 text-purple-700 border-purple-200 px-4 py-2 text-sm font-medium mb-4">
              Контакты
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600">
              Готовы ответить на ваши вопросы и помочь с заказом 24/7
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
              <CardContent className="p-8">
                <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all">
                  <Icon name="Phone" size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Телефон</h3>
                <p className="text-blue-600 font-medium text-lg">+7 (495) 123-45-67</p>
                <p className="text-gray-600 text-sm mt-1">Звонки принимаем 24/7</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
              <CardContent className="p-8">
                <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all">
                  <Icon name="Mail" size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Email</h3>
                <p className="text-blue-600 font-medium text-lg">info@edupro.ru</p>
                <p className="text-gray-600 text-sm mt-1">Ответим в течение часа</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
              <CardContent className="p-8">
                <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all">
                  <Icon name="MessageCircle" size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Мессенджеры</h3>
                <p className="text-blue-600 font-medium text-lg">WhatsApp, Telegram</p>
                <p className="text-gray-600 text-sm mt-1">Быстрая связь онлайн</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Готовы начать работу над вашим проектом?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Получите профессиональную помощь в написании учебных работ. 
            Гарантируем качество, уникальность и соблюдение сроков.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
              onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Calculator" className="mr-2" />
              Рассчитать стоимость
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
            >
              <Icon name="Phone" className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                  <Icon name="GraduationCap" size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    EduPro
                  </h3>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Профессиональная помощь студентам в написании качественных учебных работ любой сложности с гарантией результата.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Услуги</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Дипломные работы</li>
                <li className="hover:text-white transition-colors cursor-pointer">Курсовые работы</li>
                <li className="hover:text-white transition-colors cursor-pointer">Рефераты и эссе</li>
                <li className="hover:text-white transition-colors cursor-pointer">Отчёты по практике</li>
                <li className="hover:text-white transition-colors cursor-pointer">Контрольные работы</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Компания</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">О нас</li>
                <li className="hover:text-white transition-colors cursor-pointer">Наши гарантии</li>
                <li className="hover:text-white transition-colors cursor-pointer">Отзывы клиентов</li>
                <li className="hover:text-white transition-colors cursor-pointer">Политика конфиденциальности</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Контакты</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-3 text-blue-400" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-3 text-blue-400" />
                  <span>info@edupro.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={16} className="mr-3 text-blue-400" />
                  <span>Работаем 24/7</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-center md:text-left">
                &copy; 2024 EduPro. Все права защищены.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Пользовательское соглашение
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Политика конфиденциальности
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Order Form Modal */}
      {isOrderFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Заказать работу</CardTitle>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setIsOrderFormOpen(false)}
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Ваше имя</label>
                <Input placeholder="Введите ваше имя" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Телефон</label>
                <Input placeholder="+7 (___) ___-__-__" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Тип работы</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите тип работы" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="essay">Реферат/Эссе</SelectItem>
                    <SelectItem value="coursework">Курсовая работа</SelectItem>
                    <SelectItem value="diploma">Дипломная работа</SelectItem>
                    <SelectItem value="report">Отчёт по практике</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Описание работы</label>
                <Textarea 
                  placeholder="Опишите требования к работе, тему, объём и другие детали..."
                  rows={4}
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Отправить заявку
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Index;