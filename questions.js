 const chapterData = [
            {
                id: 'chapter1',
                gu: {
                    name: 'વિદ્યુતભારો અને વિદ્યુતક્ષેત્રો',
                    description: 'આ ક્વિઝ GSEB બોર્ડ પરીક્ષાના પાછલા વર્ષના પ્રશ્નો (PYQ) પર આધારિત છે. તમારા જ્ઞાનને ચકાસો અને પરીક્ષાની તૈયારી કરો.'
                },
                en: {
                    name: 'Electric Charges and Fields',
                    description: 'This quiz is based on Previous Year Questions (PYQ) from GSEB board exams. Test your knowledge and prepare for the exam.'
                },
                quizzes: [
                    {
                        id: 'quiz1_neet_mcq_practice', 
                        name: 'NEET MCQ Practice', // Single tab, not year-wise
                        questions: [
                            // Manually extracted and formatted questions from the PDF
                            {
                                answer: 0, // A
                                gu: {
                                    question: "સુવાહક પદાર્થ આપણા શરીર સાથે ઘસાય ત્યારે ત્યારે આપણા શરીરમાં થતું વીજભારનું સંચરણ સર્જે છે.",
                                    options: [
                                        "(a) સ્થિર-વિદ્યુત",
                                        "(b) પ્રવાહ વિદ્યુત",
                                        "(c) વિદ્યુત વિભવ",
                                        "(d) ઇલેક્ટ્રૉડાયનેમિક્સ"
                                    ],
                                    solution: "" // No solution as requested
                                },
                                en: {
                                    question: "When a conductor rubs against our body, the charge transfer that occurs in our body creates ______.",
                                    options: [
                                        "(a) Static electricity",
                                        "(b) Current electricity",
                                        "(c) Electric potential",
                                        "(d) Electrodynamics"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 1, // B
                                gu: {
                                    question: "સૂકા વાળમાં કાંસકો ફેરવવાથી કોઈક વાર સ્થિર વિદ્યુત પેદા થાય છે. આ ઘટના માટે જવાબદાર પ્રક્રિયા કઈ છે ?",
                                    options: [
                                        "(a) વાળ અને કાંસકા વચ્ચેનો સંપર્ક તેના માટે જવાબદાર છે.",
                                        "(b) વાળ અને કાંસકા વચ્ચેનું ઘર્ષણ તેના માટે જવાબદાર છે.",
                                        "(c) વાળ અને કાંસકા વચ્ચે થતું વિજપ્રવાહ વહન તેના માટે જવાબદાર છે.",
                                        "(d) વાળ અને કાંસકા વચ્ચેનું પ્રેરણ આ ઘટના માટે જવાબદાર છે."
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "Rubbing a comb through dry hair sometimes generates static electricity. Which process is responsible for this phenomenon?",
                                    options: [
                                        "(a) Contact between hair and comb is responsible for it.",
                                        "(b) Friction between hair and comb is responsible for it.",
                                        "(c) Electric current flow between hair and comb is responsible for it.",
                                        "(d) Induction between hair and comb is responsible for this phenomenon."
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 2, // C
                                gu: {
                                    question: "સામાન્ય રીતે જ્વલનશિલ તરલ પદાર્થો લઈ જતાં વાહનોના પાછળ ધાતુની બનેલી સાંકળો જમીનને અડે તે રીતે લટકાવવામાં આવે છે, કારણ કે…",
                                    options: [
                                        "(a) તેનાથી વાહનની ઝડપ કાબુમાં રહે છે.",
                                        "(b) વાહનનું દ્રવ્યમાન કેન્દ્ર નીચું લાવી શકાય છે.",
                                        "(c) વાહનનું body જમીન સાથે સંપર્કમાં રાખી શકાય.",
                                        "(d) વાહનની નીચે કાંઈ ન મૂકવું જોઈએ."
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "Generally, vehicles carrying flammable liquids have metal chains hanging at the back, touching the ground, because…",
                                    options: [
                                        "(a) It helps to control the speed of the vehicle.",
                                        "(b) The center of mass of the vehicle can be lowered.",
                                        "(c) The body of the vehicle can be kept in contact with the ground.",
                                        "(d) Nothing should be placed under the vehicle."
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 2, // C
                                gu: {
                                    question: "જ્યારે કાચનો સળિયો રેશમી કપડા સાથે ઘસવામાં આવે ત્યારે બંને પદાર્થ પર વીજભાર સ્થાપીત થાય છે. આ હકીકત વીજભારના સંરક્ષણના નિયમનું અનુમોદન કરે છે, કારણ કે...",
                                    options: [
                                        "(a) બંને પદાર્થ પર રહેલો વીજભાર એકબીજા પર આકર્ષણ બળ લગાડે છે.",
                                        "(b) બંને પદાર્થ એકબીજા પર અપાકર્ષી બળ લગાડે છે.",
                                        "(c) બંને પદાર્થ પર સ્થાપીત વીજભાર વિજાતીય અને સરખા મૂલ્યના હોય છે.",
                                        "(d) બંને પર રહેલા વીજભાર વિશે કાંઈ કહી ન શકાય."
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "When a glass rod is rubbed with a silk cloth, charges are established on both objects. This fact supports the law of conservation of charge because...",
                                    options: [
                                        "(a) The charges on both objects exert attractive forces on each other.",
                                        "(b) Both objects exert repulsive forces on each other.",
                                        "(c) The charges established on both objects are opposite in nature and equal in magnitude.",
                                        "(d) Nothing can be said about the charges on both."
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 1, // B
                                gu: {
                                    question: "જ્યારે બે પદાર્થોને એકબીજા સાથે ઘસવામાં આવે ત્યારે તેઓ પર....",
                                    options: [
                                        "(a) સમાન મૂલ્યના સજાતીય વીજભાર સ્થાપીત થાય છે.",
                                        "(b) સમાન મૂલ્યના વિજાતીય વીજભાર સ્થાપીત થાય છે.",
                                        "(c) અસમાન મૂલ્યના વિજાતીય વીજભાર સ્થાપીત થાય છે.",
                                        "(d) અસમાન મૂલ્યના સજાતીય વીજભાર સ્થાપીત થાય છે."
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "When two objects are rubbed together, they acquire....",
                                    options: [
                                        "(a) Like charges of equal magnitude.",
                                        "(b) Unlike charges of equal magnitude.",
                                        "(c) Unlike charges of unequal magnitude.",
                                        "(d) Like charges of unequal magnitude."
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 3, // D
                                gu: {
                                    question: "જો કોઈ પદાર્થ પર અસંતુલિત વીજભાર હોય તો તે વીજભારિત બને છે. આનો અર્થ એ થાય કે...",
                                    options: [
                                        "(a) પદાર્થ પ્રોટોન રહીત છે.",
                                        "(b) પદાર્થ ઇલેક્ટ્રૉન રહીત છે.",
                                        "(c) પદાર્થ સમાન માત્રામાં ઇલેક્ટ્રૉન અને પ્રોટોન ધરાવે છે.",
                                        "(d) પદાર્થ અસમાન માત્રામાં ઇલેક્ટ્રોન અને પ્રોટોન ધરાવે છે."
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "If an object has an unbalanced charge, it becomes charged. This means that...",
                                    options: [
                                        "(a) The object is proton-deficient.",
                                        "(b) The object is electron-deficient.",
                                        "(c) The object has equal amounts of electrons and protons.",
                                        "(d) The object has unequal amounts of electrons and protons."
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 0, // A
                                gu: {
                                    question: "પ્લાસ્ટિકનાં કાંસકાને સૂકા વાળ સાથે ઘસતાં કાંસકા પર…",
                                    options: [
                                        "(a) ઋણ વીજભાર સ્થાપીત થાય છે.",
                                        "(b) ધન વીજભાર સ્થાપીત થાય છે.",
                                        "(c) કોઈકવાર ઋણ વીજભાર સ્થાપીત થાય છે.",
                                        "(d) ઉપરોક્ત પૈકી એક પણ નહિ."
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "When a plastic comb is rubbed with dry hair, the comb acquires…",
                                    options: [
                                        "(a) Negative charge.",
                                        "(b) Positive charge.",
                                        "(c) Sometimes negative charge.",
                                        "(d) None of the above."
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 0, // A
                                gu: {
                                    question: "નીચેના પૈકી કયા પદાર્થમાં રહેલ વીજભાર પદાર્થમાં ગતિ કરી શકે છે ?",
                                    options: [
                                        "(a) માનવ શરીર",
                                        "(b) સુકા વાળ",
                                        "(c) એબોનાઇટ",
                                        "(d) પ્લાસ્ટિક"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "In which of the following substances can the charge move within the substance?",
                                    options: [
                                        "(a) Human body",
                                        "(b) Dry hair",
                                        "(c) Ebonite",
                                        "(d) Plastic"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 1, // B
                                gu: {
                                    question: "મોટા ભાગની અધાતુ વિદ્યુત માટે ______ છે.",
                                    options: [
                                        "(a) વાહક",
                                        "(b) અવાહક",
                                        "(c) અર્ધવાહક",
                                        "(d) સુપર કન્ડક્ટર"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "Most non-metals are ______ for electricity.",
                                    options: [
                                        "(a) Conductors",
                                        "(b) Insulators",
                                        "(c) Semiconductors",
                                        "(d) Superconductors"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 3, // D
                                gu: {
                                    question: "એક પદાર્થ પ્રતિસેકન્ડ $10^9$ ઇલેક્ટ્રૉન મુક્ત કરે છે, તો આ પદાર્થ પર 1 C વીજભાર સ્થાપીત થતાં કેટલો સમય લાગે ?",
                                    options: [
                                        "(a) લગભગ 198 મિનિટ",
                                        "(b) લગભગ 198 કલાક",
                                        "(c) લગભગ 198 દિવસ",
                                        "(d) લગભગ 198 વર્ષ"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "An object releases $10^9$ electrons per second. How long will it take for 1 C of charge to be established on this object?",
                                    options: [
                                        "(a) Approximately 198 minutes",
                                        "(b) Approximately 198 hours",
                                        "(c) Approximately 198 days",
                                        "(d) Approximately 198 years"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 1, // B
                                gu: {
                                    question: "1 kg દળવાળા એક પદાર્થમાં $4 \\times 10^{20}$ અણુ છે. દરેક અણુમાંથી 1 ઇલેક્ટ્રૉન દૂર કરતાં 1 g દીઠ કેટલો વીજભાર સ્થાપીત થાય ?",
                                    options: [
                                        "(a) 2.8 C",
                                        "(b) $6.4\\times10^{-2}C$",
                                        "(c) $3.6\\times10^{-3}C$",
                                        "(d) $9.2\\times10^{-4}C$"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "An object of 1 kg mass has $4 \\times 10^{20}$ atoms. If 1 electron is removed from each atom, what charge is established per 1 g?",
                                    options: [
                                        "(a) 2.8 C",
                                        "(b) $6.4\\times10^{-2}C$",
                                        "(c) $3.6\\times10^{-3}C$",
                                        "(d) $9.2\\times10^{-4}C$"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 0, // A
                                gu: {
                                    question: "17 mm નો વિકર્ણ ધરાવતો એક ચોરસ, ઍલ્યુમિનિયમના બનેલા સિક્કાનું દળ 0.75 g છે. તે વિદ્યુતીય દૃષ્ટિએ તટસ્થ છે, તો તેમાં રહેલ ધન વીજભાર અને ઋણ વીજભારનું મૂલ્ય છે. (ઍલ્યુમિનિયમનો અણુભાર $=26.98g)$",
                                    options: [
                                        "(a) $3.47\\times10^{4}C$",
                                        "(b) $3.47\\times10^{2}C$",
                                        "(c) $1.67\\times10^{20}C$",
                                        "(d) $1.67\\times10^{22}C$"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "A square aluminum coin with a 17 mm diagonal has a mass of 0.75 g. It is electrically neutral. What is the magnitude of the positive and negative charges present in it? (Atomic weight of Aluminum = 26.98g)",
                                    options: [
                                        "(a) $3.47\\times10^{4}C$",
                                        "(b) $3.47\\times10^{2}C$",
                                        "(c) $1.67\\times10^{20}C$",
                                        "(d) $1.67\\times10^{22}C$"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 2, // C
                                gu: {
                                    question: "વિદ્યુતભાર Q ને (Q – q) અને qમાં વહેંચીને એકબીજાથી નિશ્ચિત અંતરે રાખવામાં આવે છે. જો આ બે વિદ્યુતભારો વચ્ચે લાગતું બળ મહત્તમ હોય, તો.........",
                                    options: [
                                        "(a) $Q=4q$",
                                        "(b) $Q=3q$",
                                        "(c) $Q=2q$",
                                        "(d) $Q=4q+C$"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "Charge Q is divided into (Q – q) and q and kept at a fixed distance from each other. If the force between these two charges is maximum, then.........",
                                    options: [
                                        "(a) $Q=4q$",
                                        "(b) $Q=3q$",
                                        "(c) $Q=2q$",
                                        "(d) $Q=4q+C$"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 1, // B
                                gu: {
                                    question: "બે અસમાન મૂલ્યનો વીજભાર ધરાવતા વિદ્યુતભારીત કણોને એકબીજાથી d અંતરે રાખતાં બંને એકબીજા પર F બળ લગાડે છે. હવે, આ બે કણોનો એકબીજા સાથે સંપર્કમાં લાવ્યા બાદ સમાન અંતરે રાખતાં બંને વચ્ચે લાગતું બળ હશે.",
                                    options: [
                                        "(a) આકર્ષી",
                                        "(b) અપાકર્ષી",
                                        "(c) બંને કણો પર રહેલા વીજભાર પર આધારિત આકર્ષી કે અપાકર્ષી",
                                        "(d) અનિશ્ચિત"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "Two charged particles with unequal magnitudes of charge are placed at a distance d from each other, exerting a force F on each other. Now, after bringing these two particles into contact and then placing them at the same distance, the force between them will be ______.",
                                    options: [
                                        "(a) Attractive",
                                        "(b) Repulsive",
                                        "(c) Attractive or repulsive depending on the charges on both particles",
                                        "(d) Indefinite"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 1, // B
                                gu: {
                                    question: "વીજભાર $Q_1=2\\times10^{-7}$ C અને $Q_2=3\\times10^{-7}$ C વચ્ચેનું અંતર 30 cm છે, તો બંને વચ્ચે લાગતું બળ શોધો.",
                                    options: [
                                        "(a) $2\\times10^{-3}N$",
                                        "(b) $6\\times10^{-3}N$",
                                        "(c) $5\\times10^{-3}N$",
                                        "(d) $1\\times10^{-3}N$"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "The distance between charges $Q_1=2\\times10^{-7}$ C and $Q_2=3\\times10^{-7}$ C is 30 cm. Find the force between them.",
                                    options: [
                                        "(a) $2\\times10^{-3}N$",
                                        "(b) $6\\times10^{-3}N$",
                                        "(c) $5\\times10^{-3}N$",
                                        "(d) $1\\times10^{-3}N$"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 1, // B
                                gu: {
                                    question: "એકબીજાથી નિશ્ચિત અંતરે રાખેલ બે વીજભાર વચ્ચેનું માધ્યમ (i) હવા અને (ii) K ડાયઇલેક્ટ્રિક અચળાંકવાળું હોય તો આ માધ્યમોમાં બંને વીજભાર વચ્ચે લાગતા બળનો ગુણોત્તર ______.",
                                    options: [
                                        "(a) $1:K$",
                                        "(b) $K:1$",
                                        "(c) $1:K^{2}$",
                                        "(d) $K^{2}:1$"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "If the medium between two charges kept at a fixed distance from each other is (i) air and (ii) a medium with dielectric constant K, then the ratio of the forces between the two charges in these media is ______.",
                                    options: [
                                        "(a) $1:K$",
                                        "(b) $K:1$",
                                        "(c) $1:K^{2}$",
                                        "(d) $K^{2}:1$"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 2, // C
                                gu: {
                                    question: "બે વીજભારને હવામાં r અંતરે રાખતાં બંને વચ્ચે F બળ લાગે છે. આ બંને વીજભારને K જેટલો ડાયઇલેક્ટ્રિક અચળાંકવાળા માધ્યમમાં r' અંતરે રાખતાં આટલું જ બળ લાગે છે, તો r' = ______.",
                                    options: [
                                        "(a) r",
                                        "(b) $\\frac{r}{K}$",
                                        "(c) $\\frac{r}{\\sqrt{K}}$",
                                        "(d) $r\\sqrt{K}$"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "Two charges are placed at a distance r in air, and the force between them is F. If the same force acts between these two charges when placed at a distance r' in a medium with dielectric constant K, then r' = ______.",
                                    options: [
                                        "(a) r",
                                        "(b) $\\frac{r}{K}$",
                                        "(c) $\\frac{r}{\\sqrt{K}}$",
                                        "(d) $r\\sqrt{K}$"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 1, // B
                                gu: {
                                    question: "$F_G$ અને $F_e$ ઇલેક્ટ્રૉન અને પ્રોટોન વચ્ચે લાગતા ગુરુત્વાકર્ષી અને સ્થિર વિદ્યુત બળો છે. જો બંને કણ વચ્ચેનું અંતર 10 cm હોય, તો $\\frac{F_G}{F_e}$ ક્રમનું હશે.",
                                    options: [
                                        "(a) $10^{42}$",
                                        "(b) $10^{-39}$",
                                        "(c) 1",
                                        "(d) $10^{-43}$"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "$F_G$ and $F_e$ are the gravitational and electrostatic forces acting between an electron and a proton. If the distance between the two particles is 10 cm, then $\\frac{F_G}{F_e}$ will be of the order of ______.",
                                    options: [
                                        "(a) $10^{42}$",
                                        "(b) $10^{-39}$",
                                        "(c) 1",
                                        "(d) $10^{-43}$"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 0, // A
                                gu: {
                                    question: "એક આધાર બિંદુ સાથે L લંબાઈની દોરી વડે બે નાના ગોળા બાંધેલ છે. દરેક પર Q જેટલો વીજભાર મુકીને, આ તંત્રને ગુરુત્વાકર્ષણ મુક્ત વિસ્તારમાં લઈ જતાં બે દોરી વચ્ચેનો ખૂણો અને દોરીમાં ઉદ્ભવતું તણાવબળ થાય.",
                                    options: [
                                        "(a) $180^{\\circ}, \\frac{1}{4\\pi\\epsilon_{0}}\\frac{Q^{2}}{(2L)^{2}}$",
                                        "(b) $90^{\\circ}, \\frac{1}{4\\pi\\epsilon_{0}}\\frac{Q^{2}}{L^{2}}$",
                                        "(c) $180^{\\circ}, \\frac{1}{4\\pi\\epsilon_{0}}\\frac{Q^{2}}{2L^{2}}$",
                                        "(d) $180^{\\circ}, \\frac{1}{4\\pi\\epsilon_{0}}\\frac{Q^{2}}{L^{2}}$"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "Two small spheres are tied with a string of length L to a support point. If each is charged with Q and this system is taken to a gravity-free region, the angle between the two strings and the tension in the string will be ______.",
                                    options: [
                                        "(a) $180^{\\circ}, \\frac{1}{4\\pi\\epsilon_{0}}\\frac{Q^{2}}{(2L)^{2}}$",
                                        "(b) $90^{\\circ}, \\frac{1}{4\\pi\\epsilon_{0}}\\frac{Q^{2}}{L^{2}}$",
                                        "(c) $180^{\\circ}, \\frac{1}{4\\pi\\epsilon_{0}}\\frac{Q^{2}}{2L^{2}}$",
                                        "(d) $180^{\\circ}, \\frac{1}{4\\pi\\epsilon_{0}}\\frac{Q^{2}}{L^{2}}$"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 3, // D
                                gu: {
                                    question: "$q_1$ વીજભાર r ત્રિજ્યાના વર્તુળના કેન્દ્ર પર છે. m દળનો $q_2$ વીજભાર આ વર્તુળ પર વર્તુળગતિ કરે છે, તો $q_2$ નો આવર્તકાળ શોધો.",
                                    options: [
                                        "(a) $(\\frac{4\\pi^{3}mr^{2}}{kq_{1}q_{2}})^{\\frac{1}{2}}$",
                                        "(b) $(\\frac{kq_{1}q_{2}}{4\\pi^{2}mr^{2}})^{\\frac{1}{2}}$",
                                        "(c) $(\\frac{4\\pi^{2}mr^{4}}{kq_{1}q_{2}})^{\\frac{1}{2}}$",
                                        "(d) $(\\frac{4\\pi^{2}mr^{3}}{kq_{1}q_{2}})^{\\frac{1}{2}}$"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "Charge $q_1$ is at the center of a circle of radius r. A charge $q_2$ of mass m performs circular motion on this circle. Find the time period of $q_2$.",
                                    options: [
                                        "(a) $(\\frac{4\\pi^{3}mr^{2}}{kq_{1}q_{2}})^{\\frac{1}{2}}$",
                                        "(b) $(\\frac{kq_{1}q_{2}}{4\\pi^{2}mr^{2}})^{\\frac{1}{2}}$",
                                        "(c) $(\\frac{4\\pi^{2}mr^{4}}{kq_{1}q_{2}})^{\\frac{1}{2}}$",
                                        "(d) $(\\frac{4\\pi^{2}mr^{3}}{kq_{1}q_{2}})^{\\frac{1}{2}}$"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 3, // D
                                gu: {
                                    question: "કુલંબના નિયમમાં આવતો અચળાંક k નું મૂલ્ય શાની પર આધાર રાખે છે ?",
                                    options: [
                                        "(a) માધ્યમ પર",
                                        "(b) એકમ પદ્ધતિ પર",
                                        "(c) વીજભારના મૂલ્ય પર",
                                        "(d) (a) અને (b) બંને"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "On what does the value of the constant k in Coulomb's law depend?",
                                    options: [
                                        "(a) On the medium",
                                        "(b) On the system of units",
                                        "(c) On the magnitude of the charge",
                                        "(d) Both (a) and (b)"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 1, // B
                                gu: {
                                    question: "અવગણ્ય ત્રિજ્યા ધરાવતા બે ગોળા P અને Q ના કેન્દ્ર વચ્ચેનું અંતર 60 cm છે. જો બંને ગોળા પર વીજભાર $3.2\\times10^{-7}C$ હોય, તો બંને વચ્ચે લાગતું બળ કેટલું હશે ?",
                                    options: [
                                        "(a) $5.2\\times10^{-4}N$",
                                        "(b) $2.5\\times10^{-3}N$",
                                        "(c) $1.5\\times10^{-3}N$",
                                        "(d) $3.5\\times10^{-4}N$"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "Two spheres P and Q with negligible radius have their centers 60 cm apart. If both spheres have a charge of $3.2\\times10^{-7}C$, what will be the force between them?",
                                    options: [
                                        "(a) $5.2\\times10^{-4}N$",
                                        "(b) $2.5\\times10^{-3}N$",
                                        "(c) $1.5\\times10^{-3}N$",
                                        "(d) $3.5\\times10^{-4}N$"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 1, // B
                                gu: {
                                    question: "એક ચોરસનાં ચારેય શિરોબિંદુઓ પર સમાન વિદ્યુતભાર –Q અને તેના કેન્દ્ર પર q વિદ્યુતભાર મૂકેલ છે. જો તંત્ર સમતોલનમાં હોય, તો q નું મૂલ્ય કેટલું થશે ?",
                                    options: [
                                        "(a) $-\\frac{Q}{4}(1+2\\sqrt{2})$",
                                        "(b) $\\frac{Q}{4}(1+2\\sqrt{2})$",
                                        "(c) $-\\frac{Q}{2}(1+2\\sqrt{2})$",
                                        "(d) $\\frac{Q}{2}(1+2\\sqrt{2})$"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "A square has equal charges –Q at its four vertices and a charge q at its center. If the system is in equilibrium, what will be the value of q?",
                                    options: [
                                        "(a) $-\\frac{Q}{4}(1+2\\sqrt{2})$",
                                        "(b) $\\frac{Q}{4}(1+2\\sqrt{2})$",
                                        "(c) $-\\frac{Q}{2}(1+2\\sqrt{2})$",
                                        "(d) $\\frac{Q}{2}(1+2\\sqrt{2})$"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 1, // B
                                gu: {
                                    question: "l લંબાઈ ધરાવતા સમબાજુ ત્રિકોણના ત્રણેય શિરોબિંદુ પર q વીજભાર મૂકેલ છે, તો કોઈ પણ એક શિરોબિંદુ પર રહેલ વીજભાર પર લાગતું બળ ગણો.",
                                    options: [
                                        "(a) $\\frac{q^{2}}{4\\pi\\epsilon_{0}l^{2}}$",
                                        "(b) $\\frac{\\sqrt{3}q^{2}}{4\\pi\\epsilon_{0}l^{2}}$",
                                        "(c) $\\frac{\\sqrt{2}q^{2}}{4\\pi\\epsilon_{0}l^{2}}$",
                                        "(d) શૂન્ય"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "Charges q are placed at the three vertices of an equilateral triangle of side length l. Calculate the force on the charge at any one vertex.",
                                    options: [
                                        "(a) $\\frac{q^{2}}{4\\pi\\epsilon_{0}l^{2}}$",
                                        "(b) $\\frac{\\sqrt{3}q^{2}}{4\\pi\\epsilon_{0}l^{2}}$",
                                        "(c) $\\frac{\\sqrt{2}q^{2}}{4\\pi\\epsilon_{0}l^{2}}$",
                                        "(d) Zero"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 1, // B
                                gu: {
                                    question: "ત્રણ વિદ્યુતભારો q, Q અને q ને Y-અક્ષ (0, a), (0, 0) અને (0, − a) પર મૂકેલા છે. Q સંતુલિત સ્થિતિમાં હોય ત્યારે $\\frac{Q}{q}$ =",
                                    options: [
                                        "(a) 0.25",
                                        "(b) -0.25",
                                        "(c) 0.5",
                                        "(d) -0.5"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "Three charges q, Q, and q are placed on the Y-axis at (0, a), (0, 0), and (0, -a) respectively. If Q is in equilibrium, then $\\frac{Q}{q}$ = ",
                                    options: [
                                        "(a) 0.25",
                                        "(b) -0.25",
                                        "(c) 0.5",
                                        "(d) -0.5"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 0, // A
                                gu: {
                                    question: "L લંબાઈ ધરાવતા સમબાજુ ત્રિકોણના ત્રણ શિરોબિંદુ પર q વીજભાર મુકેલ છે. જો તેના કેન્દ્ર પર Q વીજભાર મુકીએ તો તેના પર લાગતું બળ શોધો.",
                                    options: [
                                        "(a) શૂન્ય",
                                        "(b) $\\frac{1}{4\\pi\\epsilon_{0}}\\frac{q^{2}}{L^{2}}$",
                                        "(c) $\\frac{1}{4\\pi\\epsilon_{0}}\\frac{3q^{2}}{L^{2}}$",
                                        "(d) $\\frac{1}{12\\pi\\epsilon_{0}}\\frac{q^{2}}{L^{2}}$"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "Charges q are placed at the three vertices of an equilateral triangle of side length L. If a charge Q is placed at its center, find the force on it.",
                                    options: [
                                        "(a) Zero",
                                        "(b) $\\frac{1}{4\\pi\\epsilon_{0}}\\frac{q^{2}}{L^{2}}$",
                                        "(c) $\\frac{1}{4\\pi\\epsilon_{0}}\\frac{3q^{2}}{L^{2}}$",
                                        "(d) $\\frac{1}{12\\pi\\epsilon_{0}}\\frac{q^{2}}{L^{2}}$"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 2, // C
                                gu: {
                                    question: "એક વિદ્યુતભારિત સુવાહક ગોળાની ત્રિજ્યા 10 cm છે. તેના કેન્દ્રથી 20 cm દૂર આવેલ બિંદુ પર વિદ્યુતક્ષેત્ર $1.2\\times10^{3}$ N C-1 કેન્દ્ર તરફ છે, તો ગોળા પર કુલ વીજભાર હશે.",
                                    options: [
                                        "(a) $-4.5\\times10^{-9}C$",
                                        "(b) $4.5\\times10^{9}C$",
                                        "(c) $-5.3\\times10^{-9}C$",
                                        "(d) $5.3\\times10^{9}C$"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "A charged conducting sphere has a radius of 10 cm. The electric field at a point 20 cm from its center is $1.2\\times10^{3}$ N C-1 directed towards the center. What is the total charge on the sphere?",
                                    options: [
                                        "(a) $-4.5\\times10^{-9}C$",
                                        "(b) $4.5\\times10^{9}C$",
                                        "(c) $-5.3\\times10^{-9}C$",
                                        "(d) $5.3\\times10^{9}C$"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 0, // A
                                gu: {
                                    question: "$3.65\\times10^{4}N~C^{-1}$ જેટલા વિદ્યુતક્ષેત્રોમાં 10 ઇલેક્ટ્રૉનનો વીજભાર ધરાવતું તેલનું ટીપું સંતુલીત અવસ્થામાં છે. તેલની ઘનતા $1.26~g/cm^{3}$ હોય તો તેલના ટીપાની ત્રિજ્યા શોધો. $(g=9.8{m/s}^{2}$, $e=1.6\\times10^{-19}C)$",
                                    options: [
                                        "(a) $1.04\\times10^{-6}$ m",
                                        "(b) $4.8\\times10^{-5}$ m",
                                        "(c) $4.8\\times10^{-18}$ m",
                                        "(d) $1.13\\times10^{-18}r$"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "An oil drop with a charge of 10 electrons is in equilibrium in an electric field of $3.65\\times10^{4}N~C^{-1}$. If the density of the oil is $1.26~g/cm^{3}$, find the radius of the oil drop. $(g=9.8{m/s}^{2}$, $e=1.6\\times10^{-19}C)$",
                                    options: [
                                        "(a) $1.04\\times10^{-6}$ m",
                                        "(b) $4.8\\times10^{-5}$ m",
                                        "(c) $4.8\\times10^{-18}$ m",
                                        "(d) $1.13\\times10^{-18}r$"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 0, // A
                                gu: {
                                    question: "$15\\times10^{-4}C$ વીજભાર પર 2.25 N બળ વિદ્યુતક્ષેત્રને કારણે લાગે છે, તો તે સ્થાને વિદ્યુતક્ષેત્રની તીવ્રતા હશે.",
                                    options: [
                                        "(a) $150~N~C^{-1}$",
                                        "(b) $15~N~C^{-1}$",
                                        "(c) $1500~N~C^{-1}$",
                                        "(d) $1.5~N~C^{-1}$"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "A force of 2.25 N acts on a charge of $15\\times10^{-4}C$ due to an electric field. What is the intensity of the electric field at that location?",
                                    options: [
                                        "(a) $150~N~C^{-1}$",
                                        "(b) $15~N~C^{-1}$",
                                        "(c) $1500~N~C^{-1}$",
                                        "(d) $1.5~N~C^{-1}$"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 2, // C
                                gu: {
                                    question: "એક બિંદુવત્ વીજભારને કારણે ‘a’ અંતરે ઉદ્ભવતા વિદ્યુતક્ષેત્રની તીવ્રતા E = Aa છે, તો આ વીજભારનું મૂલ્ય હશે.",
                                    options: [
                                        "(a) $4\\pi\\epsilon_{0}Aa^{2}$",
                                        "(b) $A\\epsilon_{0}a^{2}$",
                                        "(c) $4\\pi\\epsilon_{0}Aa^{3}$",
                                        "(d) $\\epsilon_{0}Aa^{3}$"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "The intensity of the electric field E due to a point charge at a distance 'a' is E = Aa. What will be the magnitude of this charge?",
                                    options: [
                                        "(a) $4\\pi\\epsilon_{0}Aa^{2}$",
                                        "(b) $A\\epsilon_{0}a^{2}$",
                                        "(c) $4\\pi\\epsilon_{0}Aa^{3}$",
                                        "(d) $\\epsilon_{0}Aa^{3}$"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 3, // D
                                gu: {
                                    question: "એક સાદા લોલકના ગોળાનું દળ 2 હુ છે અને તે 5 μC વીજભાર ધરાવે છે. આ લોલક $2000~V/m$ જેટલા વિદ્યુતક્ષેત્રમાં સંતુલિત અવસ્થામાં છે, તો આ લોલક શિરોલંબ દિશા સાથે સંતુલિત અવસ્થામાં કેટલો ખૂણો બનાવે ?",
                                    options: [
                                        "(a) $tan^{-1}$ (2.0)",
                                        "(b) $tan^{-1}$ (0.2)",
                                        "(c) $tan^{-1}$ (5.0)",
                                        "(d) $tan^{-1}$ (0.5)"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "A simple pendulum bob has a mass of 2 g and carries a charge of 5 μC. This pendulum is in equilibrium in an electric field of $2000~V/m$. What angle does this pendulum make with the vertical direction in equilibrium?",
                                    options: [
                                        "(a) $tan^{-1}$ (2.0)",
                                        "(b) $tan^{-1}$ (0.2)",
                                        "(c) $tan^{-1}$ (5.0)",
                                        "(d) $tan^{-1}$ (0.5)"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 2, // C
                                gu: {
                                    question: "આકૃતિમાં દર્શાવ્યા મુજબ બે બિંદુવત્ વીજભાર $+10^{-8}C$ અને -10-8 C એ 0.1 m અંતરે મૂકેલા છે, તો બિંદુ A અને C પર તેમની વિદ્યુતક્ષેત્રની તીવ્રતાના મૂલ્યનો ગુણોત્તર કેટલો થાય ?",
                                    options: [
                                        "(a) $4:1$",
                                        "(b) $1:4$",
                                        "(c) $8:1$",
                                        "(d) $1:8$"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "As shown in the figure, two point charges $+10^{-8}C$ and $-10^{-8}C$ are placed at a distance of 0.1 m. What is the ratio of the magnitudes of their electric fields at points A and C?",
                                    options: [
                                        "(a) $4:1$",
                                        "(b) $1:4$",
                                        "(c) $8:1$",
                                        "(d) $1:8$"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 1, // B
                                gu: {
                                    question: "X-અક્ષ પર $x=1~m,$ $x=2$ m, $x=4$ m વગેરે બિંદુઓ પર $5\\times10^{-9}C$ મૂલ્યના એકાંતરે ધન અને ઋણ વીજભાર મૂકતાં $x=0$ આગળ ઉદ્ભવતું વિદ્યુતક્ષેત્ર $(V/m)$ શોધો.",
                                    options: [
                                        "(a) 30",
                                        "(b) 36",
                                        "(c) 18",
                                        "(d) 0"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "Positive and negative charges of magnitude $5\\times10^{-9}C$ are placed alternately on the X-axis at points $x=1~m,$ $x=2$ m, $x=4$ m, etc. Find the electric field $(V/m)$ at $x=0$.",
                                    options: [
                                        "(a) 30",
                                        "(b) 36",
                                        "(c) 18",
                                        "(d) 0"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 2, // C
                                gu: {
                                    question: "a જેટલી વક્રતાત્રિજ્યાવાળી અને 1 જેટલી વિદ્યુતભારની રેખીય ઘનતાવાળી અર્ધવર્તુળાકાર ચાપના કેન્દ્ર આગળ મળતું વિદ્યુતક્ષેત્ર જેટલું થશે.",
                                    options: [
                                        "(a) $\\frac{\\lambda}{2\\pi\\epsilon_{0}a}$",
                                        "(b) $\\frac{\\lambda}{2\\pi\\epsilon_{0}a^{2}}$",
                                        "(c) $\\frac{\\lambda}{2\\pi^{2}\\epsilon_{0}a}$",
                                        "(d) $\\frac{\\lambda^{2}}{4\\pi\\epsilon_{0}a}$"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "The electric field at the center of a semicircular arc with radius 'a' and linear charge density $\\lambda$ will be ______.",
                                    options: [
                                        "(a) $\\frac{\\lambda}{2\\pi\\epsilon_{0}a}$",
                                        "(b) $\\frac{\\lambda}{2\\pi\\epsilon_{0}a^{2}}$",
                                        "(c) $\\frac{\\lambda}{2\\pi^{2}\\epsilon_{0}a}$",
                                        "(d) $\\frac{\\lambda^{2}}{4\\pi\\epsilon_{0}a}$"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 1, // B
                                gu: {
                                    question: "એક પદાર્થ પર 4 C વિદ્યુતભાર છે. જો આ વિદ્યુતભાર બમણો કરીએ તો નિશ્ચિત બિંદુ પર વિદ્યુતક્ષેત્રના મૂલ્ય પર શું અસર થાય ?",
                                    options: [
                                        "(a) અડધું થાય.",
                                        "(b) બમણું થાય.",
                                        "(c) અચળ રહે.",
                                        "(d) ત્રણ ગણુ થાય."
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "An object has a charge of 4 C. If this charge is doubled, what will be the effect on the magnitude of the electric field at a fixed point?",
                                    options: [
                                        "(a) It will be halved.",
                                        "(b) It will be doubled.",
                                        "(c) It will remain constant.",
                                        "(d) It will be tripled."
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 2, // C
                                gu: {
                                    question: "વિદ્યુતક્ષેત્રની તીવ્રતાનું પારિમાણીક સૂત્ર",
                                    options: [
                                        "(a) $[M^{1}L^{1}T^{3}A^{-1}]$",
                                        "(b) $[M^{1}L^{-1}T^{-3}A^{1}]$",
                                        "(c) $[M^{1}L^{1}T^{-3}A^{-1}]$",
                                        "(d) $[M^{1}L^{2}T^{1}A^{1}]$"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "The dimensional formula for electric field intensity is",
                                    options: [
                                        "(a) $[M^{1}L^{1}T^{3}A^{-1}]$",
                                        "(b) $[M^{1}L^{-1}T^{-3}A^{1}]$",
                                        "(c) $[M^{1}L^{1}T^{-3}A^{-1}]$",
                                        "(d) $[M^{1}L^{2}T^{1}A^{1}]$"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 3, // D
                                gu: {
                                    question: "વિદ્યુતભાર ધરાવતા ચાર કણોને નિયમિત પંચકોણ ABCDE ના ચાર શિરોબિંદુઓ A, B, C અને D પર મૂકેલા છે. પંચકોણના કેન્દ્રથી તેના દરેક શિરોબિંદુ વચ્ચેનું અંતર a છે, તો પંચકોણના કેન્દ્ર પર વિદ્યુતક્ષેત્રની તીવ્રતા શોધો.",
                                    options: [
                                        "(a) $\\frac{4kq}{a^{2}}$ (EO દિશામાં)",
                                        "(b) $\\frac{kq}{a^{2}}$ (EO દિશામાં)",
                                        "(c) $\\frac{4~kq}{a^{2}}$ (OE દિશામાં)",
                                        "(d) $\\frac{kq}{a^{2}}$ (OE દિશામાં)"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "Four charged particles are placed at the four vertices A, B, C, and D of a regular pentagon ABCDE. The distance from the center of the pentagon to each of its vertices is 'a'. Find the intensity of the electric field at the center of the pentagon.",
                                    options: [
                                        "(a) $\\frac{4kq}{a^{2}}$ (in EO direction)",
                                        "(b) $\\frac{kq}{a^{2}}$ (in EO direction)",
                                        "(c) $\\frac{4~kq}{a^{2}}$ (in OE direction)",
                                        "(d) $\\frac{kq}{a^{2}}$ (in OE direction)"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 0, // A
                                gu: {
                                    question: "એક સમઘનના એક શિરોબિંદુ પર q વીજભાર મૂકેલ છે. આ શિરોબિંદુમાંથી પસાર થતી સપાટીમાંથી કેટલી વિદ્યુતક્ષેત્ર-રેખાઓ પસાર થાય ?",
                                    options: [
                                        "(a) શૂન્ય",
                                        "(b) $\\frac{q}{96\\epsilon_{0}}$",
                                        "(c) $\\frac{q}{12\\epsilon_{0}}$",
                                        "(d) $\\frac{q}{24\\epsilon_{0}}$"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "A charge q is placed at one vertex of a cube. How many electric field lines pass through the surface passing through this vertex?",
                                    options: [
                                        "(a) Zero",
                                        "(b) $\\frac{q}{96\\epsilon_{0}}$",
                                        "(c) $\\frac{q}{12\\epsilon_{0}}$",
                                        "(d) $\\frac{q}{24\\epsilon_{0}}$"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 3, // D
                                gu: {
                                    question: "વિદ્યુતક્ષેત્ર-રેખાઓ ની માહિતી આપે છે.",
                                    options: [
                                        "(a) વિદ્યુતક્ષેત્રની તીવ્રતા",
                                        "(b) વિદ્યુતક્ષેત્રની દિશા",
                                        "(c) વીજભારનો પ્રકાર",
                                        "(d) આપેલ બધા જ"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "Electric field lines provide information about ______.",
                                    options: [
                                        "(a) Electric field intensity",
                                        "(b) Direction of electric field",
                                        "(c) Type of charge",
                                        "(d) All of the above"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 3, // D
                                gu: {
                                    question: "સ્થિર વીજભાર વિતરણને કારણે મળતી વિદ્યુતક્ષેત્ર-રેખાઓ માટે કયું વિધાન સાચું નથી ?",
                                    options: [
                                        "(a) વિદ્યુતક્ષેત્ર-રેખાની શરૂઆત ધન વીજભારથી થાય છે અને તેનો અંત ઋણ વીજભાર પાસે થાય છે.",
                                        "(b) બે વિદ્યુતક્ષેત્ર-રેખાઓ કદી એકબીજાને છેદતી નથી.",
                                        "(c) વિદ્યુતક્ષેત્ર-રેખાઓ બંધ ગાળા બનાવતી નથી.",
                                        "(d) વિદ્યુતક્ષેત્ર-રેખાને સતત વક્ર રેખા ન ગણી શકાય."
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "Which statement is not true for electric field lines due to a static charge distribution?",
                                    options: [
                                        "(a) Electric field lines start from positive charges and end at negative charges.",
                                        "(b) Two electric field lines never intersect each other.",
                                        "(c) Electric field lines do not form closed loops.",
                                        "(d) Electric field lines cannot be considered continuous curves."
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 2, // C
                                gu: {
                                    question: "$\\Delta S$ જેટલું ક્ષેત્રફળ ધરાવતી સપાટીનો ક્ષેત્રફળ સદિશ વિદ્યુતક્ષેત્ર (E) સાથે $\\theta$ ખૂણો બનાવે છે, તો આ સપાટી સાથે સંકળાતું ફ્લક્સ ______ છે.",
                                    options: [
                                        "(a) $E\\Delta S$",
                                        "(b) $E\\Delta S$ ના સમપ્રમાણમાં",
                                        "(c) $E\\Delta S~cos~\\theta$",
                                        "(d) $\\frac{E\\Delta S~cos~\\theta}{r^{2}}$ સમપ્રમાણમાં"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "If the area vector of a surface with area $\\Delta S$ makes an angle $\\theta$ with the electric field (E), then the flux associated with this surface is ______.",
                                    options: [
                                        "(a) $E\\Delta S$",
                                        "(b) Proportional to $E\\Delta S$",
                                        "(c) $E\\Delta S~cos~\\theta$",
                                        "(d) Proportional to $\\frac{E\\Delta S~cos~\\theta}{r^{2}}$"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 3, // D
                                gu: {
                                    question: "$\\vec{E}=4\\hat{i}+4\\hat{j}+4\\hat{k}$ ને કારણે $\\Delta\\vec{S}=5\\hat{i}$ સપાટી સાથે સંકળાતું ફ્લક્સ કેટલું થાય ?",
                                    options: [
                                        "(a) 10 એકમ",
                                        "(b) 60 એકમ",
                                        "(c) 30 એકમ",
                                        "(d) 20 એકમ"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "What is the flux associated with the surface $\\Delta\\vec{S}=5\\hat{i}$ due to $\\vec{E}=4\\hat{i}+4\\hat{j}+4\\hat{k}$?",
                                    options: [
                                        "(a) 10 units",
                                        "(b) 60 units",
                                        "(c) 30 units",
                                        "(d) 20 units"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 2, // C
                                gu: {
                                    question: "જો $\\vec{E}=10\\hat{i}+3\\hat{j}+4\\hat{k}$ હોય, તો YZ-સમતલમાં રહેલ 10 એકમ ક્ષેત્રફળવાળી સપાટી સાથે સંલગ્ન વિદ્યુત- ફ્લક્સ ગણો.",
                                    options: [
                                        "(a) 100",
                                        "(b) 10 એકમ",
                                        "(c) 30 એકમ",
                                        "(d) 40 એકમ"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "If $\\vec{E}=10\\hat{i}+3\\hat{j}+4\\hat{k}$, calculate the electric flux associated with a surface of 10 units area lying in the YZ-plane.",
                                    options: [
                                        "(a) 100",
                                        "(b) 10 units",
                                        "(c) 30 units",
                                        "(d) 40 units"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 0, // A
                                gu: {
                                    question: "વિદ્યુત-ફ્લક્સનો SI એકમ ______ છે.",
                                    options: [
                                        "(a) N $C^{-1}m^{2}$",
                                        "(b) $N~C~m^{-2}$",
                                        "(c) $N~C^{-2}m^{2}$",
                                        "(d) $N~C^{-1}m^{-2}$"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "The SI unit of electric flux is ______.",
                                    options: [
                                        "(a) N $C^{-1}m^{2}$",
                                        "(b) $N~C~m^{-2}$",
                                        "(c) $N~C^{-2}m^{2}$",
                                        "(d) $N~C^{-1}m^{-2}$"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 1, // B
                                gu: {
                                    question: "વિદ્યુત-ફ્લક્સનું પારિમાણીક સૂત્ર છે.",
                                    options: [
                                        "(a) $[M^{1}L^{1}T^{-2}]$",
                                        "(b) $[M^{1}L^{3}T^{-3}A^{-1}]$",
                                        "(c) $[M^{2}L^{2}T^{-2}A^{-2}]$",
                                        "(d) $[M^{1}L^{-3}T^{3}A^{1}]$"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "The dimensional formula for electric flux is.",
                                    options: [
                                        "(a) $[M^{1}L^{1}T^{-2}]$",
                                        "(b) $[M^{1}L^{3}T^{-3}A^{-1}]$",
                                        "(c) $[M^{2}L^{2}T^{-2}A^{-2}]$",
                                        "(d) $[M^{1}L^{-3}T^{3}A^{1}]$"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 0, // A
                                gu: {
                                    question: "E = 2 x $10^3$ N C-1 X-અક્ષની દિશામાં અસ્તિત્વ ધરાવે છે, તો YZ-સમતલમાં 10 cm બાજુ ધરાવતી ચોરસ સપાટી સાથે સંકળાતું ફ્લક્સ ______ $C^{-1}m^{2}$.",
                                    options: [
                                        "(a) 20",
                                        "(b) 30",
                                        "(c) 10",
                                        "(d) 40"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "An electric field E = 2 x $10^3$ N C-1 exists in the direction of the X-axis. What is the flux associated with a square surface of 10 cm side lying in the YZ-plane?",
                                    options: [
                                        "(a) 20",
                                        "(b) 30",
                                        "(c) 10",
                                        "(d) 40"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 2, // C
                                gu: {
                                    question: "એક l લંબાઈ ધરાવતા એક સમબાજુ ત્રિકોણના ત્રણ શિરોબિંદુ પર q, q અને -2q વીજભાર મુકેલ છે, તો તંત્રનું ડાયપોલ મોમેન્ટ ગણો.",
                                    options: [
                                        "(a) ql",
                                        "(b) 2ql",
                                        "(c) $\\sqrt{3}ql$",
                                        "(d) 4ql"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "Three charges q, q, and -2q are placed at the three vertices of an equilateral triangle of side length l. Calculate the dipole moment of the system.",
                                    options: [
                                        "(a) ql",
                                        "(b) 2ql",
                                        "(c) $\\sqrt{3}ql$",
                                        "(d) 4ql"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 1, // B
                                gu: {
                                    question: "વિદ્યુત ડાયપોલના સમાન અંતરે આવેલ અક્ષીય બિંદુ અને વિષુવવૃત્તીય બિંદુ પર વિદ્યુતક્ષેત્રના મૂલ્યોનો ગુણોત્તર ______ છે.",
                                    options: [
                                        "(a) $1:1$",
                                        "(b) $2:1$",
                                        "(c) $4:1$",
                                        "(d) આમાંથી એક પણ નહિ."
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "The ratio of the magnitudes of electric fields at an axial point and an equatorial point, both at the same distance from an electric dipole, is ______.",
                                    options: [
                                        "(a) $1:1$",
                                        "(b) $2:1$",
                                        "(c) $4:1$",
                                        "(d) None of these."
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 2, // C
                                gu: {
                                    question: "આપેલ આકૃતિમાં $OP=OQ=15$ cm, OA = OB = 2.5 mm P અને Q બિંદુ પર વિદ્યુતક્ષેત્ર અનુક્રમે ______ હશે.",
                                    options: [
                                        "(a) $2.6\\times10^{5}N~C^{-1},2.6\\times10^{5}N~C^{-1}$",
                                        "(b) $1.3\\times10^{5}N~C^{-1},1.3\\times10^{5}N~C^{-1}$",
                                        "(c) $2.6\\times10^{5}N~C^{-1},1.3\\times10^{5}N~C^{-1}$",
                                        "(d) $1.3\\times10^{5}N~C^{-1},2.6~N~C^{-1}$"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "In the given figure, $OP=OQ=15$ cm, OA = OB = 2.5 mm. The electric fields at points P and Q will be approximately ______ respectively.",
                                    options: [
                                        "(a) $2.6\\times10^{5}N~C^{-1},2.6\\times10^{5}N~C^{-1}$",
                                        "(b) $1.3\\times10^{5}N~C^{-1},1.3\\times10^{5}N~C^{-1}$",
                                        "(c) $2.6\\times10^{5}N~C^{-1},1.3\\times10^{5}N~C^{-1}$",
                                        "(d) $1.3\\times10^{5}N~C^{-1},2.6~N~C^{-1}$"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 3, // D
                                gu: {
                                    question: "એક નાના વિદ્યુત ડાયપોલની અક્ષ પર આવેલ બિંદુ પર વિદ્યુતક્ષેત્ર E છે. જો આ બિંદુનું ડાયપોલથી અંતર બમણું કરવામાં આવે તો તે બિંદુ પર વિદ્યુતક્ષેત્ર કેટલું થાય ?",
                                    options: [
                                        "(a) 4F",
                                        "(b) $\\frac{F}{2}$",
                                        "(c) $\\frac{F}{4}$",
                                        "(d) $\\frac{F}{8}$"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "The electric field at a point on the axis of a small electric dipole is E. If the distance of this point from the dipole is doubled, what will be the electric field at that point?",
                                    options: [
                                        "(a) 4F",
                                        "(b) $\\frac{F}{2}$",
                                        "(c) $\\frac{F}{4}$",
                                        "(d) $\\frac{F}{8}$"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 3, // D
                                gu: {
                                    question: "વિદ્યુત ડાયપોલ મોમન્ટ માટે આપેલ વિધાનો પૈકી કયું વિધાન સત્ય નથી ?",
                                    options: [
                                        "(a) ડાયપોલ મોમેન્ટના પરિમાણ [LTA] છે.",
                                        "(b) ડાયપોલ મોમેન્ટનો એકમ C m છે.",
                                        "(c) ડાયપોલ મોમેન્ટ ઋણ વીજભારથી ધન વીજભાર તરફની દિશા ધરાવતી સદિશ ભૌતિક રાશી છે.",
                                        "(d) ડાયપોલ મોમેન્ટ, તંત્રની સ્થિતિઊર્જા જેટલું મૂલ્ય ધરાવતી અદિશ ભૌતિક રાશી છે."
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "Which of the given statements about electric dipole moment is not true?",
                                    options: [
                                        "(a) The dimensions of dipole moment are [LTA].",
                                        "(b) The unit of dipole moment is C m.",
                                        "(c) Dipole moment is a vector quantity directed from negative charge to positive charge.",
                                        "(d) Dipole moment is a scalar quantity having magnitude equal to the potential energy of the system."
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 2, // C
                                gu: {
                                    question: "એક ડાયપોલના અક્ષીય બિંદુ પર વિદ્યુતક્ષેત્ર E છે. હવે ડાયપોલને 90°નું ભ્રમણ આપતાં આ જ બિંદુ પર વિદ્યુતક્ષેત્ર કેટલું થાય ?",
                                    options: [
                                        "(a) E",
                                        "(b) $\\frac{E}{4}$",
                                        "(c) $\\frac{E}{2}$",
                                        "(d) 2E"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "The electric field at an axial point of a dipole is E. If the dipole is rotated by 90°, what will be the electric field at the same point?",
                                    options: [
                                        "(a) E",
                                        "(b) $\\frac{E}{4}$",
                                        "(c) $\\frac{E}{2}$",
                                        "(d) 2E"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 3, // D
                                gu: {
                                    question: "એક વિદ્યુત ડાયપોલને બિંદુવત્ વીજભારના વિદ્યુતક્ષેત્રમાં મુકતાં...",
                                    options: [
                                        "(a) તેના પર લાગતું કુલ બળ અને ટૉર્ક શૂન્ય થાય.",
                                        "(b) ડાયપોલ પર લાગતું કુલ બળ શૂન્ય હોઈ શકે.",
                                        "(c) આ વિદ્યુતક્ષેત્રમાં ડાયપોલ પર લાગતું બળ શૂન્ય હોવું જોઈએ.",
                                        "(d) ડાયપોલ પર લાગતું ટૉર્ક શૂન્ય હોઈ શકે."
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "When an electric dipole is placed in the electric field of a point charge...",
                                    options: [
                                        "(a) The net force and torque on it become zero.",
                                        "(b) The net force on the dipole can be zero.",
                                        "(c) The force on the dipole in this electric field must be zero.",
                                        "(d) The torque on the dipole can be zero."
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 2, // C
                                gu: {
                                    question: "$4\\times10^{5}N/C$ જેટલા સમાન વિદ્યુતક્ષેત્રમાં એક ડાયપોલ વિદ્યુતક્ષેત્ર સાથે $60^{\\circ}$ ખૂણો બનાવે તે રીતે મૂકેલ છે અને તેના પર $8\\sqrt{3}$ N m જેટલું ટોર્ક લાગે છે. જો ડાયપોલની લંબાઈ 4 cm હોય, તો ડાયપોલનો ધનભાર શોધો.",
                                    options: [
                                        "(a) $10^{-1}C$",
                                        "(b) $10^{-2}C$",
                                        "(c) $10^{-3}C$",
                                        "(d) $10^{-4}C$"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "An electric dipole is placed in a uniform electric field of $4\\times10^{5}N/C$ making an angle of $60^{\\circ}$ with the field, and it experiences a torque of $8\\sqrt{3}$ N m. If the length of the dipole is 4 cm, find the positive charge of the dipole.",
                                    options: [
                                        "(a) $10^{-1}C$",
                                        "(b) $10^{-2}C$",
                                        "(c) $10^{-3}C$",
                                        "(d) $10^{-4}C$"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 0, // A
                                gu: {
                                    question: "અવકાશમાં $\\frac{dE}{dz}=10^{5}N~C^{-1}m^{-1}$ ના દરે મૂલ્યમાં વધારો થતો હોય તેવું વિજક્ષેત્ર Z-અક્ષની દિશામાં અસ્તિત્વ ધરાવે છે, તો $10^{-7}$ cm જેટલું ડાયપોલ મોમેન્ટ ધરાવતી ડાયપોલ Z-અક્ષને સમાંતર રાખતાં તેના પર કેટલું બળ લાગે ?",
                                    options: [
                                        "(a) $10^{-2}$",
                                        "(b) $10^{-3}$",
                                        "(c) $10^{-4}$",
                                        "(d) $-10^{-4}$"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "An electric field exists in space along the Z-axis, increasing in magnitude at a rate of $\\frac{dE}{dz}=10^{5}N~C^{-1}m^{-1}$. If a dipole with dipole moment $10^{-7}$ cm is placed parallel to the Z-axis, what force acts on it?",
                                    options: [
                                        "(a) $10^{-2}$",
                                        "(b) $10^{-3}$",
                                        "(c) $10^{-4}$",
                                        "(d) $-10^{-4}$"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 2, // C
                                gu: {
                                    question: "અવકાશમાં $\\frac{dE}{dz}=10^{5}N~C^{-1}m^{-1}$ ના દરે મૂલ્યમાં વધારો થતો હોય તેવું વિજક્ષેત્ર Z-અક્ષની દિશામાં અસ્તિત્વ ધરાવે છે, તો $10^{-7}$ cm જેટલું ડાયપોલ મોમેન્ટ ધરાવતી ડાયપોલ Z-અક્ષને સમાંતર રાખતાં ડાયપોલ પર લાગતું ટોર્ક કેટલું થાય ?",
                                    options: [
                                        "(a) $10^{2}$",
                                        "(b) $10^{-2}$",
                                        "(c) શૂન્ય",
                                        "(d) $10^{3}$"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "An electric field exists in space along the Z-axis, increasing in magnitude at a rate of $\\frac{dE}{dz}=10^{5}N~C^{-1}m^{-1}$. If a dipole with dipole moment $10^{-7}$ cm is placed parallel to the Z-axis, what torque acts on the dipole?",
                                    options: [
                                        "(a) $10^{2}$",
                                        "(b) $10^{-2}$",
                                        "(c) Zero",
                                        "(d) $10^{3}$"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 0, // A
                                gu: {
                                    question: "કોલમ Iની ભૌતિક રાશી માટે કોલમ II માંથી યોગ્ય જોડ શોધો.\n**Column I**\n(A) વીજભાર\n(B) ક્ષેત્રીય વીજભાર ઘનતા\n(C) કદ વીજભાર ઘનતા\n**Column II**\n(p) રેખીય વીજભાર ઘનતા\n(q) વીજભાર/લંબાઈ\n(r) વીજભાર/ક્ષેત્રફળ",
                                    options: [
                                        "(a) A-q, B-r, C-p",
                                        "(b) A-p, B-r, C-q",
                                        "(c) A-r, B-p, C-q",
                                        "(d) A-r, B-q, C-p"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "Match the physical quantities in Column I with their appropriate properties in Column II.\n**Column I**\n(A) Charge\n(B) Surface charge density\n(C) Volume charge density\n**Column II**\n(p) Linear charge density\n(q) Charge/Length\n(r) Charge/Area",
                                    options: [
                                        "(a) A-q, B-r, C-p",
                                        "(b) A-p, B-r, C-q",
                                        "(c) A-r, B-p, C-q",
                                        "(d) A-r, B-q, C-p"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 1, // B
                                gu: {
                                    question: "4.4 m વ્યાસવાળા એક સુવાહક ગોળા પર વીજભાર ઘનતા 80 μC m-2 છે, તો ગોળા પર કેટલો વીજભાર ($10^{-3}$ C ના પદમાં) હશે ?",
                                    options: [
                                        "(a) 8.6",
                                        "(b) 4.9",
                                        "(c) 5.7",
                                        "(d) 3.7"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "A conducting sphere with a diameter of 4.4 m has a charge density of 80 μC m-2. What is the charge on the sphere (in terms of $10^{-3}$ C)?",
                                    options: [
                                        "(a) 8.6",
                                        "(b) 4.9",
                                        "(c) 5.7",
                                        "(d) 3.7"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 3, // D
                                gu: {
                                    question: "એક ચોરસનું કેન્દ્ર ઊગમબિંદુ પર તથા તેની બાજુઓ X-અક્ષ અને Y-અક્ષને સમાંતર છે. જો તેની સીમાઓમાં પૃષ્ઠ વિદ્યુતભાર ઘનતા $\\sigma (x, y) = \\sigma_0 xy$ હોય, તો ચોરસ પરનો કુલ વિદ્યુતભાર કેટલો હશે ?",
                                    options: [
                                        "(a) $4\\sigma_{0}$",
                                        "(b) $2\\sigma_{0}$",
                                        "(c) $\\sigma_{0}$",
                                        "(d) શૂન્ય"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "A square is centered at the origin with its sides parallel to the X and Y axes. If the surface charge density within its boundaries is $\\sigma (x, y) = \\sigma_0 xy$, what is the total charge on the square?",
                                    options: [
                                        "(a) $4\\sigma_{0}$",
                                        "(b) $2\\sigma_{0}$",
                                        "(c) $\\sigma_{0}$",
                                        "(d) Zero"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 2, // C
                                gu: {
                                    question: "એક 3 m લંબાઈના સળિયા પર વીજભાર ઘનતા $\\lambda=(3x^{2}+5x+2)C/m$; જ્યાં x જે-તે બિંદુનું સળિયાના એક છેડાથી અંતર છે, તો સળિયા પરનો કુલ વીજભાર ગણો.",
                                    options: [
                                        "(a) 39.5 C",
                                        "(b) 42.5 C",
                                        "(c) 55.5 C",
                                        "(d) 60 C"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "A 3 m long rod has a charge density $\\lambda=(3x^{2}+5x+2)C/m$, where x is the distance of a point from one end of the rod. Calculate the total charge on the rod.",
                                    options: [
                                        "(a) 39.5 C",
                                        "(b) 42.5 C",
                                        "(c) 55.5 C",
                                        "(d) 60 C"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 2, // C
                                gu: {
                                    question: "$\\oint_{s}\\vec{E}\\cdot d\\vec{S}=0$ હોય તો...",
                                    options: [
                                        "(a) સપાટીની અંદર અને સપાટી પર વિદ્યુતક્ષેત્ર શૂન્ય છે.",
                                        "(b) સપાટીની અંદર વિદ્યુતક્ષેત્ર સમાન હોવું જોઈએ.",
                                        "(c) સપાટીમાં પ્રવેશતી અને સપાટીમાંથી બહાર આવતી વિદ્યુતક્ષેત્ર-રેખાઓની સંખ્યા સમાન હશે.",
                                        "(d) ઉપરોક્ત એક પણ નહિ."
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "If $\\oint_{s}\\vec{E}\\cdot d\\vec{S}=0$, then...",
                                    options: [
                                        "(a) The electric field inside and on the surface is zero.",
                                        "(b) The electric field inside the surface must be uniform.",
                                        "(c) The number of electric field lines entering the surface will be equal to the number of electric field lines leaving the surface.",
                                        "(d) None of the above."
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 1, // B
                                gu: {
                                    question: "હવામાં 1 C બિંદુવત્ વીજભારમાંથી બહાર આવતી વિદ્યુતક્ષેત્ર-રેખાઓની સંખ્યા ______ .",
                                    options: [
                                        "(a) $\\epsilon_{0}$",
                                        "(b) ${\\epsilon_{0}}^{-1}$",
                                        "(c) $(4\\pi\\epsilon_{0})^{-1}$",
                                        "(d) $4\\pi\\epsilon_{0}$"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "The number of electric field lines emanating from a 1 C point charge in air is ______.",
                                    options: [
                                        "(a) $\\epsilon_{0}$",
                                        "(b) ${\\epsilon_{0}}^{-1}$",
                                        "(c) $(4\\pi\\epsilon_{0})^{-1}$",
                                        "(d) $4\\pi\\epsilon_{0}$"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 3, // D
                                gu: {
                                    question: "એક સમઘનમાં e અને -e વીજભાર ધરાવતા આઠ ડાયપોલ મૂકેલ છે, તો સપાટી સાથે સંકળાતું કુલ ફ્લક્સ કેટલું હશે ?",
                                    options: [
                                        "(a) $\\frac{8e}{\\epsilon_{0}}$",
                                        "(b) $\\frac{16~e}{\\epsilon_{0}}$",
                                        "(c) $\\frac{e}{\\epsilon_{0}}$",
                                        "(d) શૂન્ય"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "Eight dipoles, each with charges e and -e, are placed inside a cube. What will be the total flux associated with the surface?",
                                    options: [
                                        "(a) $\\frac{8e}{\\epsilon_{0}}$",
                                        "(b) $\\frac{16~e}{\\epsilon_{0}}$",
                                        "(c) $\\frac{e}{\\epsilon_{0}}$",
                                        "(d) Zero"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 0, // A
                                gu: {
                                    question: "કોઈ વિસ્તારમાં પ્રવર્તમાન વિદ્યુતક્ષેત્ર ફક્ત x અને y યામો પર સૂત્ર $\\vec{E}=b\\frac{x\\hat{i}+y\\hat{j}}{x^{2}+y^{2}}$ મુજબ આધારિત છે. અહીં b અચળાંક છે. યામાક્ષોના ઉગમબિંદુ પર જેનું કેન્દ્ર હોય તેવા r ત્રિજ્યાવાળા ગોળાના પૃષ્ઠ સાથે સંકળાયેલું વિદ્યુત-ફ્લક્સ શોધો.",
                                    options: [
                                        "(a) $2\\pi br$",
                                        "(b) $\\pi br$",
                                        "(c) $4\\pi br$",
                                        "(d) $4\\pi br^{2}$"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "The electric field in a region depends only on x and y coordinates according to the formula $\\vec{E}=b\\frac{x\\hat{i}+y\\hat{j}}{x^{2}+y^{2}}$, where b is a constant. Find the electric flux associated with the surface of a sphere of radius r centered at the origin of the coordinate axes.",
                                    options: [
                                        "(a) $2\\pi br$",
                                        "(b) $\\pi br$",
                                        "(c) $4\\pi br$",
                                        "(d) $4\\pi br^{2}$"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 0, // A
                                gu: {
                                    question: "સમઘનના કેન્દ્ર પર Q μC બિંદુવત્ વિદ્યુતભાર મૂકતા ઘનતા કોઈ પણ એક પૃષ્ઠ સાથે સંકળાતું વિદ્યુત-ફ્લક્સ ______ .",
                                    options: [
                                        "(a) $\\frac{Q}{6\\epsilon_{0}}$",
                                        "(b) $\\frac{Q}{8\\epsilon_{0}}$",
                                        "(c) $\\frac{Q}{24\\epsilon_{0}}$",
                                        "(d) $\\frac{Q}{48\\epsilon_{0}}$"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "When a point charge Q μC is placed at the center of a cube, the electric flux associated with any one face of the cube is ______.",
                                    options: [
                                        "(a) $\\frac{Q}{6\\epsilon_{0}}$",
                                        "(b) $\\frac{Q}{8\\epsilon_{0}}$",
                                        "(c) $\\frac{Q}{24\\epsilon_{0}}$",
                                        "(d) $\\frac{Q}{48\\epsilon_{0}}$"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 2, // C
                                gu: {
                                    question: "ગૉસના નિયમમાં ધ્યાનમાં લેવામાં આવતી સપાટીને ______ કહે છે.",
                                    options: [
                                        "(a) બંધ સપાટી",
                                        "(b) ગોળાકાર સપાટી",
                                        "(c) ગૉસીયન સપાટી",
                                        "(d) સમતલ સપાટી"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "The surface considered in Gauss's law is called ______.",
                                    options: [
                                        "(a) Closed surface",
                                        "(b) Spherical surface",
                                        "(c) Gaussian surface",
                                        "(d) Plane surface"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 0, // A
                                gu: {
                                    question: "એક ગોલીય સપાટીમાં એક ડાયપોલ આવેલ છે, તો આ ગોલીય સપાટી સાથે સંકળાતું કુલ ફ્લક્સ ______ .",
                                    options: [
                                        "(a) શૂન્ય",
                                        "(b) એક વીજભારથી મળતા ફુલક્સથી અડધું",
                                        "(c) એક વીજભારથી મળતા ફુલક્સથી બમણું",
                                        "(d) ડાયપોલના સ્થાન પર આધારિત"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "An electric dipole is placed inside a spherical surface. What is the total flux associated with this spherical surface?",
                                    options: [
                                        "(a) Zero",
                                        "(b) Half of the flux from a single charge",
                                        "(c) Double the flux from a single charge",
                                        "(d) Depends on the position of the dipole"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 0, // A
                                gu: {
                                    question: "વિદ્યુતભાર qને સમઘનના કેન્દ્ર પર મૂકેલ છે. આથી ઘનની કોઈ પણ બાજુમાંથી પસાર થતું ફ્લક્સ કેટલું?",
                                    options: [
                                        "(a) $\\frac{4\\pi q}{6(4\\pi\\epsilon_{0})}$",
                                        "(b) $\\frac{q}{6(4\\pi\\epsilon_{0})}$",
                                        "(c) $\\frac{2\\pi q}{6(4\\pi\\epsilon_{0})}$",
                                        "(d) $\\frac{\\pi q}{6(4\\pi\\epsilon_{0})}$"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "A charge q is placed at the center of a cube. What is the flux passing through any face of the cube?",
                                    options: [
                                        "(a) $\\frac{4\\pi q}{6(4\\pi\\epsilon_{0})}$",
                                        "(b) $\\frac{q}{6(4\\pi\\epsilon_{0})}$",
                                        "(c) $\\frac{2\\pi q}{6(4\\pi\\epsilon_{0})}$",
                                        "(d) $\\frac{\\pi q}{6(4\\pi\\epsilon_{0})}$"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 2, // C
                                gu: {
                                    question: "ગૉસના નિયમ માટે આપેલ વિધાનો પૈકી કયું વિધાન સાચું નથી ?",
                                    options: [
                                        "(a) ગૉસનો નિયમ બંધ સપાટીને જ લાગુ પડે છે.",
                                        "(b) ગૉસના નિયમમાં આવતું $\\Sigma q$ પદ બંધ સપાટીમાં રહેલા બધા જ વીજભારોનો સરવાળો દર્શાવે છે.",
                                        "(c) ગૉસના નિયમથી દરેક પ્રકારની સંમતિ ધરાવતા વીજભાર વિતરણને કારણે ઉદ્ભવતું વિદ્યુતક્ષેત્ર શોધી શકાતું નથી.",
                                        "(d) ગૉસનો નિયમ અંતર માટે વ્યસ્ત-વર્ગનો નિયમ એવા કુલંબના નિયમ પર આધારિત છે."
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "Which of the given statements about Gauss's law is not true?",
                                    options: [
                                        "(a) Gauss's law applies only to closed surfaces.",
                                        "(b) The term $\\Sigma q$ in Gauss's law represents the sum of all charges enclosed within the closed surface.",
                                        "(c) Gauss's law cannot be used to find the electric field due to every type of symmetric charge distribution.",
                                        "(d) Gauss's law is based on Coulomb's law, which is an inverse-square law for distance."
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 2, // C
                                gu: {
                                    question: "સમઘનના એક જ શિરોબિંદુ પર આવેલા Q જેટલા બિંદુવત્ વિદ્યુતભારને કારણે તેની સાથે સંકળાતું વિદ્યુત-ફ્લક્સ ______ થાય.",
                                    options: [
                                        "(a) $\\frac{Q}{3\\epsilon_{0}}$",
                                        "(b) $\\frac{Q}{6\\epsilon_{0}}$",
                                        "(c) $\\frac{Q}{8\\epsilon_{0}}$",
                                        "(d) $\\frac{Q}{\\epsilon_{0}}$"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "The electric flux associated with a cube due to a point charge Q placed at one of its vertices is ______.",
                                    options: [
                                        "(a) $\\frac{Q}{3\\epsilon_{0}}$",
                                        "(b) $\\frac{Q}{6\\epsilon_{0}}$",
                                        "(c) $\\frac{Q}{8\\epsilon_{0}}$",
                                        "(d) $\\frac{Q}{\\epsilon_{0}}$"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 1, // B
                                gu: {
                                    question: "એકબીજાથી d અંતરે રહેલ બે અનંત સમતલીય સપાટીઓ $\\sigma$ અને $-\\sigma$ વીજભાર ઘનતા ધરાવે છે, તો આ બે સમતલ વચ્ચેના કોઈ બિંદુએ વિદ્યુતક્ષેત્ર કેટલું હશે ?",
                                    options: [
                                        "(a) શૂન્ય",
                                        "(b) $\\frac{\\sigma}{\\epsilon_{0}}$",
                                        "(c) $\\frac{\\sigma}{2\\epsilon_{0}}$",
                                        "(d) બિંદુના સ્થાન પર આધાર રાખે"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "Two infinite parallel planes with charge densities $\\sigma$ and $-\\sigma$ are separated by a distance d. What is the electric field at any point between these two planes?",
                                    options: [
                                        "(a) Zero",
                                        "(b) $\\frac{\\sigma}{\\epsilon_{0}}$",
                                        "(c) $\\frac{\\sigma}{2\\epsilon_{0}}$",
                                        "(d) Depends on the position of the point"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 3, // D
                                gu: {
                                    question: "બે પાતળી ધાતુની પ્લેટ એકબીજાની નજીક, એકબીજાને સમાંતર રાખેલ છે. બંને પર $17.0\\times10^{-22}C~m^{-2}$ જેટલી વિજાતીય વીજભાર ઘનતા છે. આ બે પ્લેટની બહારની બાજુએ વીજક્ષેત્રનું મૂલ્ય ગણો.",
                                    options: [
                                        "(a) $17\\times10^{-22}N/C$",
                                        "(b) $1.5\\times10^{-15}N/C$",
                                        "(c) $1.9\\times10^{-10}N/C$",
                                        "(d) 0"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "Two thin metal plates are placed close to each other, parallel to each other. Both have opposite charge densities of $17.0\\times10^{-22}C~m^{-2}$. Calculate the magnitude of the electric field outside these two plates.",
                                    options: [
                                        "(a) $17\\times10^{-22}N/C$",
                                        "(b) $1.5\\times10^{-15}N/C$",
                                        "(c) $1.9\\times10^{-10}N/C$",
                                        "(d) 0"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 3, // D
                                gu: {
                                    question: "R ત્રિજ્યાના પોલા ગોળા પર Q જેટલો વીજભાર છે, તો $r<R$ માટે વિદ્યુતક્ષેત્રની તીવ્રતાનું મૂલ્ય ગણો.",
                                    options: [
                                        "(a) $\\frac{kQR}{r^{3}}$",
                                        "(b) $\\frac{kQr}{R^{3}}$",
                                        "(c) $\\frac{kQ}{r^{2}}$",
                                        "(d) શૂન્ય"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "A hollow sphere of radius R has a charge Q. Calculate the magnitude of the electric field intensity for $r<R$.",
                                    options: [
                                        "(a) $\\frac{kQR}{r^{3}}$",
                                        "(b) $\\frac{kQr}{R^{3}}$",
                                        "(c) $\\frac{kQ}{r^{2}}$",
                                        "(d) Zero"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 3, // D
                                gu: {
                                    question: "R ત્રિજ્યાના વીજભારિત અવાહક ગોળાના કેન્દ્રથી r અંતરે વિદ્યુતક્ષેત્રની તીવ્રતા E માટે ______ $(r<R)$",
                                    options: [
                                        "(a) $E=0$",
                                        "(b) $E\\propto\\frac{1}{r^{2}}$",
                                        "(c) $E\\propto\\frac{1}{r}$",
                                        "(d) $E\\propto r$"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "For the electric field intensity E at a distance r from the center of a charged non-conducting sphere of radius R, ______ $(r<R)$",
                                    options: [
                                        "(a) $E=0$",
                                        "(b) $E\\propto\\frac{1}{r^{2}}$",
                                        "(c) $E\\propto\\frac{1}{r}$",
                                        "(d) $E\\propto r$"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 1, // B
                                gu: {
                                    question: "$\\lambda$ અને $-\\lambda$ જેટલી રેખીય વીજભાર ઘનતા ધરાવતા બે અનંત તાર એકબીજાથી R અંતરે શૂન્યાવકાશમાં મૂકેલ છે. આ બે તારની વચ્ચે એકબીજાથી સમાન અંતરે આવેલ બિંદુ પર વિદ્યુતક્ષેત્રની તીવ્રતા ગણો.",
                                    options: [
                                        "(a) શૂન્ય",
                                        "(b) $\\frac{2\\lambda}{\\pi\\epsilon_{0}R}$",
                                        "(c) $\\frac{\\lambda}{\\pi\\epsilon_{0}R}$",
                                        "(d) $\\frac{\\lambda}{2\\pi\\epsilon_{0}R}$"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "Two infinite wires with linear charge densities $\\lambda$ and $-\\lambda$ are placed in vacuum at a distance R from each other. Calculate the electric field intensity at a point equidistant from both wires, between them.",
                                    options: [
                                        "(a) Zero",
                                        "(b) $\\frac{2\\lambda}{\\pi\\epsilon_{0}R}$",
                                        "(c) $\\frac{\\lambda}{\\pi\\epsilon_{0}R}$",
                                        "(d) $\\frac{\\lambda}{2\\pi\\epsilon_{0}R}$"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 1, // B
                                gu: {
                                    question: "આકૃતિમાં દર્શાવ્યા મુજબ m દળ અને + q વિદ્યુતભાર ધરાવતા કણને દોરીના એક છેડે બાંધેલ છે. આ ગોળો ખૂબ મોટી વિદ્યુતભારિત સમતલ પ્લેટ P સાથે $\\theta$ કોણે સમતોલનમાં છે, તો પ્લેટ પર વિદ્યુતભારની પૃષ્ઠઘનતા $\\sigma$ એ ______ ના સમપ્રમાણમાં હશે.",
                                    options: [
                                        "(a) sin",
                                        "(b) tan",
                                        "(c) cos",
                                        "(d) cot"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "As shown in the figure, a particle of mass m and charge +q is tied to one end of a string. This sphere is in equilibrium at an angle $\\theta$ with a very large charged planar plate P. Then the surface charge density $\\sigma$ on the plate will be proportional to ______.",
                                    options: [
                                        "(a) sin",
                                        "(b) tan",
                                        "(c) cos",
                                        "(d) cot"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 3, // D
                                gu: {
                                    question: "R ત્રિજ્યાના પાતળા ગોલીય કવચ પર વીજભાર ઘનતા $\\sigma$ છે, તો ગોળાના કેન્દ્રથી x અંતરે રહેલ બિંદુ માટે વિદ્યુતક્ષેત્ર",
                                    options: [
                                        "(a) $\\sigma$ ના વ્યસ્ત પ્રમાણમાં હશે.",
                                        "(b) $x^{2}$ ના સમપ્રમાણમાં હશે.",
                                        "(c) Rના સમપ્રમાણમાં હશે",
                                        "(d) $x^{2}$ ના વ્યસ્ત પ્રમાણમાં હશે."
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "A thin spherical shell of radius R has a charge density $\\sigma$. For a point at distance x from the center of the sphere, the electric field will be ______.",
                                    options: [
                                        "(a) Inversely proportional to $\\sigma$.",
                                        "(b) Proportional to $x^{2}$.",
                                        "(c) Proportional to R.",
                                        "(d) Inversely proportional to $x^{2}$."
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 0, // A
                                gu: {
                                    question: "વિધાન : જ્યારે એક પદાર્થને બીજા પદાર્થ સાથે ઘસવાથી એક પદાર્થ પર $q_1$ અને બીજા પદાર્થ પર $q_2$ વીજભાર મળે છે. આ પ્રક્રિયામાં $q_1+q_2=0$\nકારણ : અલગ કરેલા તંત્રનો વીજભાર અચળ રહે છે.",
                                    options: [
                                        "(a) વિધાન અને કારણ બંને સાચાં છે અને કારણ વિધાનની સાચી સમજૂતી આપે છે.",
                                        "(b) વિધાન અને કારણ બંને સાચાં, પણ કારણ વિધાનની સાચી સમજૂતી આપતું નથી.",
                                        "(c) વિધાન સાચું પણ કારણ ખોટું છે.",
                                        "(d) વિધાન ખોટું પણ કારણ સાચું છે."
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "Assertion: When one object is rubbed with another, one object gets charge $q_1$ and the other object gets charge $q_2$. In this process, $q_1+q_2=0$.\nReason: The charge of an isolated system remains constant.",
                                    options: [
                                        "(a) Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
                                        "(b) Both Assertion and Reason are true, but Reason is not the correct explanation of Assertion.",
                                        "(c) Assertion is true, but Reason is false.",
                                        "(d) Assertion is false, but Reason is true."
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 3, // D
                                gu: {
                                    question: "વિધાન : સુવાહકની બહારની બાજુ સુવાહકની આસપાસ વિદ્યુતક્ષેત્રની તીવ્રતા, સ્થાનીક વીજભાર ઘનતા પર આધારિત છે. તે બીજા વીજભાર વિતરણ પર આધારિત નથી.\nકારણ : સુવાહકની બહારની બાજુ સુવાહકની આસપાસ વિદ્યુતક્ષેત્રની તીવ્રતા $E=\\frac{\\sigma}{\\epsilon_{0}}$ હોય છે.",
                                    options: [
                                        "(a) વિધાન અને કારણ બંને સાચાં છે અને કારણ વિધાનની સાચી સમજૂતી આપે છે.",
                                        "(b) વિધાન અને કારણ બંને સાચાં, પણ કારણ વિધાનની સાચી સમજૂતી આપતું નથી.",
                                        "(c) વિધાન સાચું પણ કારણ ખોટું છે.",
                                        "(d) વિધાન ખોટું પણ કારણ સાચું છે."
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "Assertion: The electric field intensity outside a conductor depends on the local charge density around the conductor. It does not depend on other charge distributions.\nReason: The electric field intensity outside a conductor is $E=\\frac{\\sigma}{\\epsilon_{0}}$.",
                                    options: [
                                        "(a) Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
                                        "(b) Both Assertion and Reason are true, but Reason is not the correct explanation of Assertion.",
                                        "(c) Assertion is true, but Reason is false.",
                                        "(d) Assertion is false, but Reason is true."
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 0, // A
                                gu: {
                                    question: "વિધાન : કોઈ પણ પદાર્થ પર પ્રસ્થાપીત કરી શકાતો કે તેની પાસેથી લઈ લેવામાં આવતો વીજભાર e નો પૂર્ણાંક ગુણાંક હોય છે.\nકારણ : વિશ્વમાં મળી આવતો વીજભાર e નો પૂર્ણાંક ગુણાંક હોય છે.",
                                    options: [
                                        "(a) વિધાન અને કારણ બંને સાચાં છે અને કારણ વિધાનની સાચી સમજૂતી આપે છે.",
                                        "(b) વિધાન અને કારણ બંને સાચાં, પણ કારણ વિધાનની સાચી સમજૂતી આપતું નથી.",
                                        "(c) વિધાન સાચું પણ કારણ ખોટું છે.",
                                        "(d) વિધાન ખોટું પણ કારણ સાચું છે."
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "Assertion: The charge that can be established on or removed from any object is an integral multiple of e.\nReason: The charge found in the universe is an integral multiple of e.",
                                    options: [
                                        "(a) Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
                                        "(b) Both Assertion and Reason are true, but Reason is not the correct explanation of Assertion.",
                                        "(c) Assertion is true, but Reason is false.",
                                        "(d) Assertion is false, but Reason is true."
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 2, // C
                                gu: {
                                    question: "વિધાન : કુલંબ બળ અને ગુરુત્વાકર્ષણનું બળ બંને અંતર માટે વ્યસ્ત-વર્ગનો નિયમ પાળે છે.\nકારણ : બંને નિયમોના દરેક પાસાં સમાન છે.",
                                    options: [
                                        "(a) વિધાન અને કારણ બંને સાચાં છે અને કારણ વિધાનની સાચી સમજૂતી આપે છે.",
                                        "(b) વિધાન અને કારણ બંને સાચાં, પણ કારણ વિધાનની સાચી સમજૂતી આપતું નથી.",
                                        "(c) વિધાન સાચું પણ કારણ ખોટું છે.",
                                        "(d) વિધાન ખોટું પણ કારણ સાચું છે."
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "Assertion: Both Coulomb's force and gravitational force obey the inverse-square law for distance.\nReason: All aspects of both laws are identical.",
                                    options: [
                                        "(a) Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
                                        "(b) Both Assertion and Reason are true, but Reason is not the correct explanation of Assertion.",
                                        "(c) Assertion is true, but Reason is false.",
                                        "(d) Assertion is false, but Reason is true."
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 1, // B
                                gu: {
                                    question: "વિધાન : બે વિદ્યુતભાર વચ્ચે લાગતું કુલંબ બળ પર ત્રીજા વીજભારની અસર થતી નથી.\nકારણ : કોઈ પણ વીજભાર પર લાગતું કુલ કુલંબ બળ અન્ય વીજભારને કારણે જે-તે સમયે લાગતાં કુલંબ બળોનો સદિશ સરવાળો છે.",
                                    options: [
                                        "(a) વિધાન અને કારણ બંને સાચાં છે અને કારણ વિધાનની સાચી સમજૂતી આપે છે.",
                                        "(b) વિધાન અને કારણ બંને સાચાં, પણ કારણ વિધાનની સાચી સમજૂતી આપતું નથી.",
                                        "(c) વિધાન સાચું પણ કારણ ખોટું છે.",
                                        "(d) વિધાન ખોટું પણ કારણ સાચું છે."
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "Assertion: The Coulomb force between two charges is not affected by a third charge.\nReason: The total Coulomb force on any charge is the vector sum of the Coulomb forces acting at that time due to other charges.",
                                    options: [
                                        "(a) Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
                                        "(b) Both Assertion and Reason are true, but Reason is not the correct explanation of Assertion.",
                                        "(c) Assertion is true, but Reason is false.",
                                        "(d) Assertion is false, but Reason is true."
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 2, // C
                                gu: {
                                    question: "વિધાન : શરૂઆતમાં સ્થિર અવસ્થામાં રહેલ ઘન વીજભારને મુક્ત કરતાં તે વિદ્યુતબળ-રેખા પર ગતિ કરશે (વિદ્યુતબળ સિવાયના બળો અવગણો).\nકારણ : વીજભાર હંમેશાં વિદ્યુતબળ-રેખા પર ગતિ કરે છે.",
                                    options: [
                                        "(a) વિધાન અને કારણ બંને સાચાં છે અને કારણ વિધાનની સાચી સમજૂતી આપે છે.",
                                        "(b) વિધાન અને કારણ બંને સાચાં, પણ કારણ વિધાનની સાચી સમજૂતી આપતું નથી.",
                                        "(c) વિધાન સાચું પણ કારણ ખોટું છે.",
                                        "(d) વિધાન ખોટું પણ કારણ સાચું છે."
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "Assertion: When a positive charge initially at rest is released, it will move along the electric field line (neglecting forces other than electric force).\nReason: Charge always moves along the electric field line.",
                                    options: [
                                        "(a) Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
                                        "(b) Both Assertion and Reason are true, but Reason is not the correct explanation of Assertion.",
                                        "(c) Assertion is true, but Reason is false.",
                                        "(d) Assertion is false, but Reason is true."
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 0, // A
                                gu: {
                                    question: "વિધાન : એકસમાન વિદ્યુતક્ષેત્રમાં ઇલેક્ટ્રૉન વિદ્યુતક્ષેત્રની વિરુદ્ધ દિશામાં ગતિ કરે છે.\nકારણ : ઈલેક્ટ્રૉન ઋણ વીજભાર ધરાવે છે.",
                                    options: [
                                        "(a) વિધાન અને કારણ બંને સાચાં છે અને કારણ વિધાનની સાચી સમજૂતી આપે છે.",
                                        "(b) વિધાન અને કારણ બંને સાચાં, પણ કારણ વિધાનની સાચી સમજૂતી આપતું નથી.",
                                        "(c) વિધાન સાચું પણ કારણ ખોટું છે.",
                                        "(d) વિધાન ખોટું પણ કારણ સાચું છે."
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "Assertion: In a uniform electric field, electrons move in the direction opposite to the electric field.\nReason: Electrons have negative charge.",
                                    options: [
                                        "(a) Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
                                        "(b) Both Assertion and Reason are true, but Reason is not the correct explanation of Assertion.",
                                        "(c) Assertion is true, but Reason is false.",
                                        "(d) Assertion is false, but Reason is true."
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 0, // A
                                gu: {
                                    question: "વિધાન : $30\\times10^{-5}C$ m ડાયપોલ મોમેન્ટવાળી ડાયપોલ એક બંધસપાટીમાં મૂકતાં આ ડાયપોલને કારણે સપાટી સાથે સંકળાતું ફ્લક્સ શૂન્ય થાય.\nકારણ : વિદ્યુત ડાયપોલ બે સમાન મૂલ્યના વિજાતીય વીજભારોની બનેલી રચના છે.",
                                    options: [
                                        "(a) વિધાન અને કારણ બંને સાચાં છે અને કારણ વિધાનની સાચી સમજૂતી આપે છે.",
                                        "(b) વિધાન અને કારણ બંને સાચાં, પણ કારણ વિધાનની સાચી સમજૂતી આપતું નથી.",
                                        "(c) વિધાન સાચું પણ કારણ ખોટું છે.",
                                        "(d) વિધાન ખોટું પણ કારણ સાચું છે."
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "Assertion: When a dipole with dipole moment $30\\times10^{-5}C$ m is placed inside a closed surface, the flux associated with the surface due to this dipole is zero.\nReason: An electric dipole is a configuration of two equal and opposite charges.",
                                    options: [
                                        "(a) Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
                                        "(b) Both Assertion and Reason are true, but Reason is not the correct explanation of Assertion.",
                                        "(c) Assertion is true, but Reason is false.",
                                        "(d) Assertion is false, but Reason is true."
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 1, // B
                                gu: {
                                    question: "વિધાન : અનિયમિત આકારના પદાર્થ પર ક્ષેત્રીય વીજભાર ઘનતા અસમાન હોય છે.\nકારણ : ક્ષેત્રીય વીજભાર ઘનતા એ એકમ ક્ષેત્રફળદીઠ વીજભાર છે.",
                                    options: [
                                        "(a) વિધાન અને કારણ બંને સાચાં છે અને કારણ વિધાનની સાચી સમજૂતી આપે છે.",
                                        "(b) વિધાન અને કારણ બંને સાચાં, પણ કારણ વિધાનની સાચી સમજૂતી આપતું નથી.",
                                        "(c) વિધાન સાચું પણ કારણ ખોટું છે.",
                                        "(d) વિધાન ખોટું પણ કારણ સાચું છે."
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "Assertion: The surface charge density on an irregularly shaped object is non-uniform.\nReason: Surface charge density is the charge per unit area.",
                                    options: [
                                        "(a) Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
                                        "(b) Both Assertion and Reason are true, but Reason is not the correct explanation of Assertion.",
                                        "(c) Assertion is true, but Reason is false.",
                                        "(d) Assertion is false, but Reason is true."
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 3, // D
                                gu: {
                                    question: "વિધાન : બંધસપાટીમાં રહેલા વીજભારને સપાટીની અંદર જ સ્થાનાંતર આપતા સપાટી પરના વિદ્યુતક્ષેત્રમાં કોઈ ફર્ક પડતો નથી.\nકારણ : બંધસપાટી સાથે સંકળાયેલ ફુલક્સ તેમાં રહેલા વીજભારના સ્થાન પર આધારિત નથી.",
                                    options: [
                                        "(a) વિધાન અને કારણ બંને સાચાં છે અને કારણ વિધાનની સાચી સમજૂતી આપે છે.",
                                        "(b) વિધાન અને કારણ બંને સાચાં, પણ કારણ વિધાનની સાચી સમજૂતી આપતું નથી.",
                                        "(c) વિધાન સાચું પણ કારણ ખોટું છે.",
                                        "(d) વિધાન ખોટું પણ કારણ સાચું છે."
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "Assertion: Shifting the charge within a closed surface does not change the electric field on the surface.\nReason: The flux associated with a closed surface does not depend on the position of the charge within it.",
                                    options: [
                                        "(a) Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
                                        "(b) Both Assertion and Reason are true, but Reason is not the correct explanation of Assertion.",
                                        "(c) Assertion is true, but Reason is false.",
                                        "(d) Assertion is false, but Reason is true."
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 1, // B
                                gu: {
                                    question: "વિધાન : બંધ સપાટીમાં કુલ વીજભાર શૂન્ય હોય તો સપાટી સાથે સંકળાતું કુલ ફૂલક્સ શૂન્ય હોય છે.\nકારણ : ગૉસનો નિયમ બધા જ પ્રકારની બંધ સપાટીને લાગુ પડે છે.",
                                    options: [
                                        "(a) વિધાન અને કારણ બંને સાચાં છે અને કારણ વિધાનની સાચી સમજૂતી આપે છે.",
                                        "(b) વિધાન અને કારણ બંને સાચાં, પણ કારણ વિધાનની સાચી સમજૂતી આપતું નથી.",
                                        "(c) વિધાન સાચું પણ કારણ ખોટું છે.",
                                        "(d) વિધાન ખોટું પણ કારણ સાચું છે."
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "Assertion: If the total charge inside a closed surface is zero, then the total flux associated with the surface is zero.\nReason: Gauss's law applies to all types of closed surfaces.",
                                    options: [
                                        "(a) Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
                                        "(b) Both Assertion and Reason are true, but Reason is not the correct explanation of Assertion.",
                                        "(c) Assertion is true, but Reason is false.",
                                        "(d) Assertion is false, but Reason is true."
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 3, // D
                                gu: {
                                    question: "કોલમ I માં આપેલ વીજભાર માટે કોલમ II માંથી યોગ્ય ગુણધર્મ શોધો.\n**Column I**\n(A) સજાતિય વીજભાર\n(B) વિજાતીય વીજભાર\n(C) વિદ્યુતભાર\n(D) સમાન મૂલ્યના વિજાતીય વીજભાર\n**Column II**\n(1) બે પ્રકારના હોઈ શકે.\n(2) એકબીજાને અપાકર્ષે છે.\n(3) એકબીજાને આકર્ષે છે.\n(4) નો પરિણામી વીજભાર શૂન્ય થાય.",
                                    options: [
                                        "(a) (A)-(1), (B)-(2), (C)-(3), (D)-(4)",
                                        "(b) (A)-(2), (B)-(1), (C)-(3), (D)-(4)",
                                        "(c) (A)-(4), (B)-(1), (C)-(3), (D)-(2)",
                                        "(d) (A)-(2), (B)-(3), (C)-(1), (D)-(4)"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "Match the charges given in Column I with their appropriate properties from Column II.\n**Column I**\n(A) Like charges\n(B) Unlike charges\n(C) Electric charge\n(D) Equal magnitude opposite charges\n**Column II**\n(1) Can be of two types.\n(2) Repel each other.\n(3) Attract each other.\n(4) Resultant charge becomes zero.",
                                    options: [
                                        "(a) (A)-(1), (B)-(2), (C)-(3), (D)-(4)",
                                        "(b) (A)-(2), (B)-(1), (C)-(3), (D)-(4)",
                                        "(c) (A)-(4), (B)-(1), (C)-(3), (D)-(2)",
                                        "(d) (A)-(2), (B)-(3), (C)-(1), (D)-(4)"
                                    ],
                                    solution: ""
                                }
                            },
                            {
                                answer: 0, // A
                                gu: {
                                    question: "કોલમ I માં આપેલ પદાર્થ માટે કોલમ II માંથી વિદ્યુતક્ષેત્રનું મૂલ્ય શોધો.\n**Column I**\n(A) એકસમાન વીજભાર વિતરણવાળું અનંત પાતળું સમતલ\n(B) અનંત વિસ્તારવાળું, સમાન જાડાઈવાળું, સમાન વીજભાર ઘનતાવાળું સમતલ\n(C) વિદ્યુતભારીત અવાહક ગોળાની સપાટી\n(D) વિદ્યુતભારીત વાહક ગોળાનું કેન્દ્ર\n**Column II**\n(1) 0\n(2) $\\frac{\\sigma}{2\\epsilon_{0}}$\n(3) $\\frac{R\\rho}{3\\epsilon_{0}}$\n(4) $\\frac{\\sigma}{\\epsilon_{0}}$",
                                    options: [
                                        "(a) (A)-(2), (B)-(4), (C)-(3), (D)-(1)",
                                        "(b) (A)-(3), (B)-(2), (C)-(1), (D)-(4)",
                                        "(c) (A)-(1), (B)-(4), (C)-(2), (D)-(3)",
                                        "(d) (A)-(2), (B)-(1), (C)-(4), (D)-(3)"
                                    ],
                                    solution: ""
                                },
                                en: {
                                    question: "Match the object in Column I with the magnitude of the electric field from Column II.\n**Column I**\n(A) Infinite thin plane with uniform charge distribution\n(B) Infinite plane with uniform thickness and uniform charge density\n(C) Surface of a charged non-conducting sphere\n(D) Center of a charged conducting sphere\n**Column II**\n(1) 0\n(2) $\\frac{\\sigma}{2\\epsilon_{0}}$\n(3) $\\frac{R\\rho}{3\\epsilon_{0}}$\n(4) $\\frac{\\sigma}{\\epsilon_{0}}$",
                                    options: [
                                        "(a) (A)-(2), (B)-(4), (C)-(3), (D)-(1)",
                                        "(b) (A)-(3), (B)-(2), (C)-(1), (D)-(4)",
                                        "(c) (A)-(1), (B)-(4), (C)-(2), (D)-(3)",
                                        "(d) (A)-(2), (B)-(1), (C)-(4), (D)-(3)"
                                    ],
                                    solution: ""
                                }
                            }
                        ]
                    }
                ]
            }
        ];


