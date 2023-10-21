import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            'sede': 'SETTLEMENT',
            'religiones': 'RELIGIONS',
            'alianzas': 'ALLIANCES',
            'fundacion': 'FOUNDATION',
            'juegotronos': 'GAME OF THRONES',
            'casas': 'HOUSES',
            'personajes': 'CHARACTERS',
            'cronologia':'CHRONOLOGY'
        }
    },
    es: {
        translation: {
            'sede': 'SEDE',
            'religiones': 'RELIGIONES',
            'alianzas': 'ALIANZAS',
            'fundacion': 'FUNDACION',
            'juegotronos': 'JUEGO DE TRONOS',
            'casas': 'CASAS',
            'personajes': 'PERSONAJES', 
            'cronologia': 'CRONOLOGIA'
        }
    },
}
i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'es',
        fallbackLng: 'en',
    });


export default i18n;