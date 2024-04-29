const AllLanguageOptions = {
  en: [
    { value: "en", label: "English" },
    { value: "es", label: "Spanish" },
    { value: "hi", label: "Hindi" },
  ],
  es: [
    { value: "en", label: "Inglés" },
    { value: "es", label: "Español" },
    { value: "hi", label: "Hindi" },
  ],
  hi: [
    { value: "en", label: "अंग्रेज़ी" },
    { value: "es", label: "स्पेनिश" },
    { value: "hi", label: "हिंदी" },
  ],
};

const SortedLanguageOptions = AllLanguageOptions;
// ?.sort((a, b) => {
//   const labelA = a.label.toUpperCase();
//   const labelB = b.label.toUpperCase();
//   if (labelA < labelB) {
//     return -1;
//   }
//   if (labelA > labelB) {
//     return 1;
//   }
//   return 0;
// });
export default SortedLanguageOptions;
