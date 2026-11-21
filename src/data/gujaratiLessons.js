// gu    = the Gujarati text the learner sees
// roman = the English letters the learner types to produce it
//         (capital letters are hard sounds: T Th D Dh N L Sh, M = ં)

export const gujaratiLessons = [
  { id: 1, level: "Beginner", title: "Kakko 1: ક ખ ગ ઘ", gu: "ક ખ ગ ઘ ક ખ ગ ઘ", roman: "ka kha ga gha ka kha ga gha" },
  { id: 2, level: "Beginner", title: "Kakko 2: ચ છ જ ઝ", gu: "ચ છ જ ઝ ચ છ જ ઝ", roman: "cha chha ja jha cha chha ja jha" },
  { id: 3, level: "Beginner", title: "Kakko 3: ટ ઠ ડ ઢ ણ", gu: "ટ ઠ ડ ઢ ણ ટ ઠ ડ ઢ ણ", roman: "Ta Tha Da Dha Na Ta Tha Da Dha Na" },
  { id: 4, level: "Beginner", title: "Kakko 4: ત થ દ ધ ન", gu: "ત થ દ ધ ન ત થ દ ધ ન", roman: "ta tha da dha na ta tha da dha na" },
  { id: 5, level: "Beginner", title: "Kakko 5: પ ફ બ ભ મ", gu: "પ ફ બ ભ મ પ ફ બ ભ મ", roman: "pa pha ba bha ma pa pha ba bha ma" },
  { id: 6, level: "Beginner", title: "Kakko 6: ય ર લ વ શ ષ સ હ ળ", gu: "ય ર લ વ શ ષ સ હ ળ", roman: "ya ra la va sha Sha sa ha La" },
  { id: 7, level: "Beginner", title: "Barakhadi: ક", gu: "ક કા કિ કી કુ કૂ કે કૈ કો કૌ કં", roman: "ka kaa ki kee ku koo ke kai ko kau kaM" },
  { id: 8, level: "Beginner", title: "Barakhadi: મ", gu: "મ મા મિ મી મુ મૂ મે મૈ મો મૌ મં", roman: "ma maa mi mee mu moo me mai mo mau maM" },
  { id: 9, level: "Intermediate", title: "Simple words", gu: "ઘર જલ ફૂલ નદી શાળા સાગર", roman: "ghar jal phool nadee shaaLaa saagar" },
  { id: 10, level: "Intermediate", title: "More words", gu: "પાણી પુસ્તક વિદ્યાર્થી પર્વત કમળ", roman: "paaNee pustak vidyaarthee parvat kamaL" },
  { id: 11, level: "Intermediate", title: "Family words", gu: "માતા પિતા ભાઈ બહેન", roman: "maataa pitaa bhaaee bahen" },
  { id: 12, level: "Intermediate", title: "Conjuncts (jodakshar)", gu: "ક્ષ જ્ઞ ત્ર શ્ર સ્થ દ્ય", roman: "ksha jnya tra shra stha dya" },
  { id: 13, level: "Intermediate", title: "Numbers", gu: "૧ ૨ ૩ ૪ ૫ ૬ ૭ ૮ ૯ ૦", roman: "1 2 3 4 5 6 7 8 9 0" },
  { id: 14, level: "Intermediate", title: "Sentences 1", gu: "કેમ છો. હું મજામાં છું.", roman: "kem chho. huM majaamaaM chhuM." },
  { id: 15, level: "Intermediate", title: "Sentences 2", gu: "તમારું નામ શું છે. મને ગુજરાતી ભાષા ગમે છે.", roman: "tamaaruM naam shuM chhe. mane gujaraatee bhaaShaa game chhe." },
  { id: 16, level: "Advanced", title: "Paragraph", gu: "ગુજરાત ભારતનું એક રાજ્ય છે. તેની રાજધાની ગાંધીનગર છે.", roman: "gujaraat bhaaratanuM ek raajya chhe. tenee raajadhaanee gaaMdheenagar chhe." },
];

// Short drills for the free demo on the public page
export const gujaratiDrills = [
  { id: "kakko", label: "Kakko", gu: "ક ખ ગ ઘ", roman: "ka kha ga gha" },
  { id: "barakhadi", label: "Barakhadi", gu: "ક કા કિ કી કુ કૂ કે કૈ કો કૌ", roman: "ka kaa ki kee ku koo ke kai ko kau" },
  { id: "words", label: "Words", gu: "ઘર જલ ફૂલ નદી", roman: "ghar jal phool nadee" },
  { id: "sentence", label: "Sentence", gu: "કેમ છો. હું મજામાં છું.", roman: "kem chho. huM majaamaaM chhuM." },
];