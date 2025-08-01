// Kategori çeviri haritası
export const categoryTranslations = {
    // İngilizce → Türkçe
    "electronics": "Elektronik",
    "jewelery": "Takı",
    "men's clothing": "Erkek Giyim",
    "women's clothing": "Kadın Giyim"
};

// Ters çeviri haritası (Türkçe → İngilizce)
export const reverseCategoryTranslations = {
    "Elektronik": "electronics",
    "Takı": "jewelery", 
    "Erkek Giyim": "men's clothing",
    "Kadın Giyim": "women's clothing"
};

// İngilizce kategoriyi Türkçeye çevir
export const translateCategoryToTurkish = (englishCategory) => {
    return categoryTranslations[englishCategory] || englishCategory;
};

// Türkçe kategoriyi İngilizceye çevir
export const translateCategoryToEnglish = (turkishCategory) => {
    return reverseCategoryTranslations[turkishCategory] || turkishCategory;
};