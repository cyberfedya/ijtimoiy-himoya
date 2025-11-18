// Mock data for the application
const mockData = {
    users: [
        { id: 1, name: 'Admin User', email: 'admin@example.com', role: 'Admin', department: 'IT', username: 'admin', password: 'admin', jshshir: '12345678901234' },
        { id: 2, name: 'Бахтиёр Алиев', email: 'bakhtiyor@example.com', role: 'Hodim', department: 'Boshqaruv', username: 'user', password: 'user', jshshir: '23456789012345' },
        { id: 3, name: 'Нодира Каримова', email: 'nodira@example.com', role: 'Hodim', department: 'Moliya', jshshir: '34567890123456' },
        { id: 4, name: 'Санжар Юсупов', email: 'sanjar@example.com', role: 'Masul shaxs', department: 'Yuridik', jshshir: '45678901234567' },
        { id: 5, name: 'Мурожаатчи', email: 'citizen@example.com', role: 'Fuqaro', department: null, username: 'fuqaro', password: '123456', jshshir: '56789012345678', address: 'Тошкент, Чилонзор тумани', mfy: 'Қатортол МФЙ' },
    ],

    // Мурожаат турлари (из ТЗ)
    appealTypes: [
        { id: 1, name: 'Shikoyat', description: 'Шикоят' },
        { id: 2, name: 'Taklif', description: 'Таклиф' },
        { id: 3, name: 'Ariza', description: 'Ариза' },
        { id: 4, name: 'Sorov', description: 'Сўров' }
    ],

    // Мурожаат манбалари (из ТЗ)
    appealSources: [
        'Yozma murojaat (pochta)',
        'Virtual qabulxona',
        'Xalq qabulxonasi',
        'Sayyor qabul',
        'Shaxsiy qabul',
        'Call-markaz',
        'Veb-portal',
        'Mobil ilova',
        'Boshqa tashkilotlar'
    ],

    // Устувoрлик даражаси (из ТЗ)
    priorities: [
        { id: 1, name: 'Shoshilinch', color: 'red', description: 'Tezkor yechim talab qiluvchi masalalar' },
        { id: 2, name: 'Standart', color: 'blue', description: 'Belgilangan tartibda ko\'rib chiqiluvchi masalalar' },
        { id: 3, name: 'Uzoq muddatli', color: 'gray', description: 'Qo\'shimcha o\'rganish talab etiluvchi masalalar' }
    ],

    // Худудлар (для географического анализа)
    regions: [
        'Тошкент шаҳри', 'Тошкент вилояти', 'Андижон', 'Бухоро', 'Фарғона',
        'Жиззах', 'Наманган', 'Навоий', 'Қашқадарё', 'Қорақалпоғистон',
        'Самарқанд', 'Сирдарё', 'Сурхондарё', 'Хоразм'
    ],

    // Тизим ташкилотлари
    organizations: [
        { id: 1, name: 'Ижтимоий ҳимоя миллий агентлиги', type: 'Markaziy' },
        { id: 2, name: 'Тошкент шаҳар бошқармаси', type: 'Hududiy' },
        { id: 3, name: '"Инсон" ижтимоий хизматлар маркази', type: 'Xizmat markazi' },
        { id: 4, name: 'Чилонзор туман ижтимоий ходими', type: 'Tuman' }
    ],

    // Мурожаатлар (обновленные с новыми полями из ТЗ)
    appeals: [
        {
            id: 1,
            appealNumber: 'MR-2024-001',
            title: 'Ижтимоий нафақа тўғрисида сўров',
            content: 'Ногиронлиги бўйича нафақани расмийлаштириш учун қандай ҳужжатлар керак?',
            appealType: 'Sorov',
            priority: 'Standart',
            status: 'Ko\'rib chiqilmoqda',
            source: 'Veb-portal',
            region: 'Тошкент шаҳри',
            organization: 'Тошкент шаҳар бошқармаси',
            createdAt: '2024-11-10T09:00:00Z',
            updatedAt: '2024-11-15T14:30:00Z',
            deadline: '2024-11-20T18:00:00Z',
            citizen: { id: 5, name: 'Мурожаатчи', jshshir: '56789012345678', address: 'Тошкент, Чилонзор тумани', phone: '+998901234567' },
            responsiblePerson: { id: 2, name: 'Бахтиёр Алиев', department: 'Boshqaruv' },
            response: null,
            attachments: [],
            history: [
                { id: 1, action: 'Мурожаат қабул қилинди', createdAt: '2024-11-10T09:00:00Z', user: { name: 'Тизим' } },
                { id: 2, action: 'Масъул шахсга йўналтирилди', createdAt: '2024-11-10T09:30:00Z', user: { name: 'Admin User' } }
            ]
        },
        {
            id: 2,
            appealNumber: 'MR-2024-002',
            title: 'Ижтимоий ёрдам олиш учун ариза',
            content: 'Камбағал оилалар учун молиявий ёрдам олиш имкониятлари тўғрисида маълумот бериш.',
            appealType: 'Ariza',
            priority: 'Shoshilinch',
            status: 'Qabul qilindi',
            source: 'Call-markaz',
            region: 'Самарқанд',
            organization: 'Ижтимоий ҳимоя миллий агентлиги',
            createdAt: '2024-11-12T10:30:00Z',
            updatedAt: '2024-11-13T16:20:00Z',
            deadline: '2024-11-15T17:00:00Z',
            citizen: { id: 5, name: 'Олима Раҳмонова', jshshir: '67890123456789', address: 'Самарқанд вилояти', phone: '+998902345678' },
            responsiblePerson: { id: 4, name: 'Санжар Юсупов', department: 'Yuridik' },
            response: null,
            attachments: [],
            history: [
                { id: 1, action: 'Мурожаат қабул қилинди', createdAt: '2024-11-12T10:30:00Z', user: { name: 'Тизим' } }
            ]
        },
        {
            id: 3,
            appealNumber: 'MR-2024-003',
            title: 'Хизмат кўрсатишда камчиликлар тўғрисида шикоят',
            content: 'Ижтимоий хизматлар марказида хизмат кўрсатиш сифати паст. Ходимлар эътиборсизлиги.',
            appealType: 'Shikoyat',
            priority: 'Shoshilinch',
            status: 'Yakuniy javob berildi',
            source: 'Virtual qabulxona',
            region: 'Бухоро',
            organization: '"Инсон" ижтимоий хизматлар маркази',
            createdAt: '2024-11-01T08:00:00Z',
            updatedAt: '2024-11-08T11:45:00Z',
            deadline: '2024-11-05T16:00:00Z',
            citizen: { id: 5, name: 'Жавлон Усмонов', jshshir: '78901234567890', address: 'Бухоро вилояти', phone: '+998903456789' },
            responsiblePerson: { id: 3, name: 'Нодира Каримова', department: 'Moliya' },
            response: 'Шикоятингиз бўйича текширув ўтказилди. Аниқланган камчиликлар бартараф этилди. Масъул ходимлар огохлантирилди.',
            attachments: ['response_letter.pdf'],
            history: [
                { id: 1, action: 'Мурожаат қабул қилинди', createdAt: '2024-11-01T08:00:00Z', user: { name: 'Тизим' } },
                { id: 2, action: 'Текширув ўтказилди', createdAt: '2024-11-03T10:00:00Z', user: { name: 'Нодира Каримова' } },
                { id: 3, action: 'Жавоб тайёрланди', createdAt: '2024-11-05T14:00:00Z', user: { name: 'Нодира Каримова' } },
                { id: 4, action: 'Жавоб юборилди', createdAt: '2024-11-08T11:45:00Z', user: { name: 'Тизим' } }
            ]
        },
        {
            id: 4,
            appealNumber: 'MR-2024-004',
            title: 'Ногиронлик гувоҳномасини расмийлаштириш',
            content: 'Ногиронлик гувоҳномасини олиш учун қандай тартибда ариза бериш керак?',
            appealType: 'Sorov',
            priority: 'Standart',
            status: 'Qo\'shimcha ma\'lumot talab qilinadi',
            source: 'Mobil ilova',
            region: 'Андижон',
            organization: 'Ижтимоий ҳимоя миллий агентлиги',
            createdAt: '2024-11-09T07:30:00Z',
            updatedAt: '2024-11-15T15:10:00Z',
            deadline: '2024-11-16T12:00:00Z',
            citizen: { id: 5, name: 'Нигора Аҳмедова', jshshir: '89012345678901', address: 'Андижон шаҳри', phone: '+998904567890' },
            responsiblePerson: { id: 2, name: 'Бахтиёр Алиев', department: 'Boshqaruv' },
            response: null,
            attachments: [],
            history: [
                { id: 1, action: 'Мурожаат қабул қилинди', createdAt: '2024-11-09T07:30:00Z', user: { name: 'Тизим' } },
                { id: 2, action: 'Қўшимча ҳужжатлар сўралди', createdAt: '2024-11-12T10:00:00Z', user: { name: 'Бахтиёр Алиев' } }
            ]
        },
        {
            id: 5,
            appealNumber: 'MR-2024-005',
            title: 'Тизимдан фойдаланиш бўйича таклиф',
            content: 'Мурожаат порталини янада содда ва тушунарли қилиш учун интерфейсни ўзгартириш таклифи.',
            appealType: 'Taklif',
            priority: 'Uzoq muddatli',
            status: 'Ko\'rib chiqilmoqda',
            source: 'Yozma murojaat (pochta)',
            region: 'Фарғона',
            organization: 'Ижтимоий ҳимоя миллий агентлиги',
            createdAt: '2024-11-14T09:00:00Z',
            updatedAt: '2024-11-15T17:00:00Z',
            deadline: '2024-11-25T18:00:00Z',
            citizen: { id: 5, name: 'Акбар Турсунов', jshshir: '90123456789012', address: 'Фарғона вилояти', phone: '+998905678901' },
            responsiblePerson: { id: 1, name: 'Admin User', department: 'IT' },
            response: null,
            attachments: [],
            history: [
                { id: 1, action: 'Мурожаат қабул қилинди', createdAt: '2024-11-14T09:00:00Z', user: { name: 'Тизим' } }
            ]
        },
        {
            id: 6,
            appealNumber: 'MR-2024-006',
            title: 'Ўтган муддатдаги мурожаат',
            content: 'Ойлар олдин юборган мурожаатимга жавоб олмадим. Қайта кўриб чиқилишини сўрайман.',
            appealType: 'Shikoyat',
            priority: 'Shoshilinch',
            status: 'Muddatdan oshgan',
            source: 'Xalq qabulxonasi',
            region: 'Тошкент вилояти',
            organization: 'Чилонзор туман ижтимоий ходими',
            createdAt: '2024-09-15T10:00:00Z',
            updatedAt: '2024-11-10T12:00:00Z',
            deadline: '2024-09-25T17:00:00Z',
            citizen: { id: 5, name: 'Собира Исмоилова', jshshir: '01234567890123', address: 'Тошкент вилояти', phone: '+998906789012' },
            responsiblePerson: { id: 3, name: 'Нодира Каримова', department: 'Moliya' },
            response: null,
            attachments: [],
            history: [
                { id: 1, action: 'Мурожаат қабул қилинди', createdAt: '2024-09-15T10:00:00Z', user: { name: 'Тизим' } },
                { id: 2, action: 'Муддат ўтказилди', createdAt: '2024-09-26T00:00:00Z', user: { name: 'Тизим' } },
                { id: 3, action: 'Қайта кўриб чиқиш учун йўналтирилди', createdAt: '2024-11-10T12:00:00Z', user: { name: 'Admin User' } }
            ]
        }
    ],

    correspondences: [],

    roles: [
        { id: 1, name: 'Admin', description: 'Тизим администратори' },
        { id: 2, name: 'Bank apparati', description: 'Банк аппарати ходими' },
        { id: 3, name: 'Boshqaruv', description: 'Бошқарув ходими' },
        { id: 4, name: 'Yordamchi', description: 'Ёрдамчи' },
        { id: 5, name: 'Reviewer', description: 'Келишувчи' }
    ],

    departments: [
        { id: 1, name: 'IT', parentId: null },
        { id: 2, name: 'Boshqaruv', parentId: null },
        { id: 3, name: 'Moliya', parentId: null },
        { id: 4, name: 'Yuridik', parentId: null }
    ],

    stages: [
        'PENDING_REGISTRATION', 'REGISTRATION', 'RESOLUTION', 'ASSIGNMENT', 
        'EXECUTION', 'DRAFTING', 'REVISION_REQUESTED', 'SIGNATURE', 
        'DISPATCH', 'FINAL_REVIEW', 'COMPLETED', 'REJECTED', 
        'ON_HOLD', 'CANCELLED', 'ARCHIVED'
    ],

    stageDisplayNames: {
        'PENDING_REGISTRATION': 'Registratsiya kutilmoqda',
        'REGISTRATION': 'Registratsiya',
        'RESOLUTION': 'Rezolyutsiya',
        'ASSIGNMENT': 'Ijrochiga yo`naltirish',
        'EXECUTION': 'Ijro',
        'DRAFTING': 'Loyihalash',
        'REVISION_REQUESTED': 'Qayta ishlashga yuborildi',
        'SIGNATURE': 'Imzolash',
        'DISPATCH': 'Jo`natish',
        'FINAL_REVIEW': 'Yakuniy kelishuv',
        'COMPLETED': 'Yakunlangan',
        'REJECTED': 'Rad etilgan',
        'ON_HOLD': 'To`xtatilgan',
        'CANCELLED': 'Bekor qilingan',
        'ARCHIVED': 'Arxivlangan'
    },

    kartotekaItems: [
        "Barchasi", "Markaziy Bank", "Murojaatlar", "Prezident Administratsiyasi",
        "Vazirlar Mahkamasi", "Xizmat yozishmalari", "Nazoratdagi"
    ],

    // Статистика для дашборда
    statistics: {
        totalAppeals: 246,
        receivedToday: 12,
        inProgress: 89,
        completed: 134,
        overdue: 23,
        averageResponseTime: '3.5 кун',
        satisfactionRate: 87
    }
};
