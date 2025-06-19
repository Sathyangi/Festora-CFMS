// src/pages/CulturalFestivalPage.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Import all local images directly
import vesakImage from '../assets/images/vesak1.jpg';
import posonImage from '../assets/images/poson1.png';
import poyaDayImage from '../assets/images/poya1.jpg';
import kathinaImage from '../assets/images/katinapinkama.png';
import thaiPongalImage from '../assets/images/thaipongal.jpg';
import mahaShivaratriImage from '../assets/images/mahashivarathri.png';
import deepavaliImage from '../assets/images/deepawali.png';
import navarathriImage from '../assets/images/navarathri.png';
import eidAlFitrImage from '../assets/images/eid.jpg';
import eidAlAdhaImage from '../assets/images/EID_ALADHA.png';
import mawlidAlNabiImage from '../assets/images/nabi.png';
import christmasImage from '../assets/images/christmas.png';
import easterImage from '../assets/images/easter.png';
import goodFridayImage from '../assets/images/goodfriday.png';
import ourLadyOfMadhuImage from '../assets/images/LadyofMadhu.png';
import sinhalaTamilNewYearImage from '../assets/images/awrudu.jpeg';
import kataragamaDevotionImage from '../assets/images/kataragama.png';

function CulturalFestivalPage() {
    const [culturalFestivals, setCulturalFestivals] = useState([
        // --- Buddhist Festivals ---
        {
            id: 301,
            name: 'Vesak Poya',
            location: 'Island-wide',
            date: 'May (Full Moon)',
            description: 'The most sacred Buddhist festival, commemorating the birth, enlightenment, and passing of Lord Buddha. Celebrations involve illuminating homes and public spaces with lanterns and pandals, observing "sil" (precepts) at temples, meditating, and organizing "dansals" (free food and drink stalls) as acts of generosity.',
            religion: 'Buddhist',
            culture: 'Pan-Sri Lankan',
            imageUrl: vesakImage,
        },
        {
            id: 302,
            name: 'Poson Poya',
            location: 'Mihintale, Anuradhapura & Island-wide',
            date: 'June (Full Moon)',
            description: 'Commemorates the introduction of Buddhism to Sri Lanka by Arahat Mahinda in the 3rd century BC. It is a day of deep religious observance, with devotees engaging in pilgrimages, particularly to Mihintale, observing precepts, and listening to Dhamma sermons.',
            religion: 'Buddhist',
            culture: 'Pan-Sri Lankan',
            imageUrl: posonImage,
        },
        {
            id: 303,
            name: 'Poya Days (Monthly Full Moon)',
            location: 'Island-wide',
            date: 'Every Full Moon Day',
            description: 'Each Poya (Full Moon) day is a public holiday and a day of religious significance for Buddhists. Devotees visit temples, offer flowers, light oil lamps, meditate, and observe precepts (Ata Sil or Dasa Sil), reflecting on the teachings of the Buddha. No alcohol or meat is sold publicly on these days.',
            religion: 'Buddhist',
            culture: 'Pan-Sri Lankan',
            imageUrl: poyaDayImage,
        },
        {
            id: 304,
            name: 'Kathina Pinkama',
            location: 'Buddhist Temples Island-wide',
            date: 'October/November (after Vassana Retreat)',
            description: 'An annual alms-giving ceremony held at the end of the three-month "Vassana" (rainy season) retreat for Buddhist monks. Lay devotees offer new robes (Kathina Cheevara) and other requisites to the Sangha, accruing great merit and strengthening the bond between monks and the laity.',
            religion: 'Buddhist',
            culture: 'Pan-Sri Lankan',
            imageUrl: kathinaImage,
        },

        // --- Hindu Festivals ---
        {
            id: 305,
            name: 'Thai Pongal',
            location: 'Northern & Eastern Provinces, Estate Sector, Island-wide Hindu homes',
            date: 'January',
            description: 'A vibrant harvest festival celebrated by the Tamil community, offering thanks to the Sun God (Surya) for a bountiful harvest. It involves the ceremonial cooking of "Pongal" (a sweet rice dish) in new pots, family gatherings, and prayers in homes and temples, symbolizing gratitude and new beginnings.',
            religion: 'Hindu',
            culture: 'Tamil',
            imageUrl: thaiPongalImage,
        },
        {
            id: 306,
            name: 'Maha Shivaratri',
            location: 'Hindu Temples Island-wide',
            date: 'February/March',
            description: 'The "Great Night of Shiva" is a significant Hindu festival dedicated to Lord Shiva. Devotees observe strict fasts, chant prayers, perform "poojas" (rituals) and offerings to the Shiva Lingam throughout the night, seeking spiritual awakening and liberation.',
            religion: 'Hindu',
            culture: 'Tamil',
            imageUrl: mahaShivaratriImage,
        },
        {
            id: 307,
            name: 'Deepavali (Diwali)',
            location: 'Island-wide (primarily Hindu communities)',
            date: 'October/November',
            description: 'The "Festival of Lights" celebrated by Hindus, symbolizing the victory of light over darkness, good over evil, and knowledge over ignorance. Marked by lighting oil lamps, fireworks, exchanging sweets, and prayers to Lakshmi, the goddess of wealth and prosperity.',
            religion: 'Hindu',
            culture: 'Tamil',
            imageUrl: deepavaliImage,
        },
        {
            id: 308,
            name: 'Navarathri',
            location: 'Hindu Temples Island-wide',
            date: 'September/October (9 nights)',
            description: 'A nine-night festival dedicated to the worship of the Hindu divine feminine, Goddess Durga (for bravery), Lakshmi (for wealth), and Saraswathy (for education). Devotees observe fasts, offer prayers, and visit temples. Homes often feature "kolu" (doll exhibitions).',
            religion: 'Hindu',
            culture: 'Tamil',
            imageUrl: navarathriImage,
        },

        // --- Muslim Festivals ---
        {
            id: 309,
            name: 'Eid al-Fitr (Ramazan Festival)',
            location: 'Island-wide',
            date: 'Varies (Islamic Calendar, end of Ramadan)',
            description: 'Marks the end of Ramadan, the Islamic holy month of fasting. Celebrated with communal prayers at mosques, family feasts, giving of charity (Zakat al-Fitr) to the needy, visiting relatives and friends, and exchanging gifts, signifying spiritual renewal and gratitude.',
            religion: 'Muslim',
            culture: 'Islamic',
            imageUrl: eidAlFitrImage,
        },
        {
            id: 310,
            name: 'Eid al-Adha (Hajj Festival / Festival of Sacrifice)',
            location: 'Island-wide',
            date: 'Varies (Islamic Calendar, after Hajj pilgrimage)',
            description: 'The second major Islamic festival, coinciding with the annual Hajj pilgrimage. It commemorates Prophet Ibrahim\'s (Abraham\'s) willingness to sacrifice his son as an act of obedience to God. Observances include communal prayers, symbolic animal sacrifice, and distributing meat to family, friends, and the poor.',
            religion: 'Muslim',
            culture: 'Islamic',
            imageUrl: eidAlAdhaImage,
        },
        {
            id: 311,
            name: 'Mawlid al-Nabi (Milad-un-Nabi)',
            location: 'Island-wide',
            date: 'Varies (Islamic Calendar)',
            description: 'The birthday of Prophet Muhammad. Observed by many Muslims with special prayers, religious gatherings, recitations from the Quran, and discussions about the Prophet\'s life and teachings. It is a day of reflection and remembrance.',
            religion: 'Muslim',
            culture: 'Islamic',
            imageUrl: mawlidAlNabiImage,
        },

        // --- Christian Festivals ---
        {
            id: 312,
            name: 'Christmas',
            location: 'Island-wide',
            date: 'December 25th',
            description: 'Celebrated by Christian communities worldwide, commemorating the birth of Jesus Christ. Festivities include attending midnight mass and church services, carol singing, decorating homes with Christmas trees and lights, exchanging gifts, and special family meals.',
            religion: 'Christian',
            culture: 'Christian (Global/Sri Lankan)',
            imageUrl: christmasImage,
        },
        {
            id: 313,
            name: 'Easter',
            location: 'Island-wide (particularly Catholic communities)',
            date: 'Varies (Spring)',
            description: 'The most important Christian festival, celebrating the resurrection of Jesus Christ from the dead. Marked by solemn church services, prayers, and family gatherings. Preceded by Lent (a period of fasting and repentance) and Holy Week.',
            religion: 'Christian',
            culture: 'Christian',
            imageUrl: easterImage,
        },
        {
            id: 314,
            name: 'Good Friday',
            location: 'Island-wide (particularly Catholic communities)',
            date: 'Varies (Friday before Easter)',
            description: 'A solemn day commemorating the crucifixion of Jesus Christ. Christians observe fasting and attend special church services focusing on the passion of Christ.',
            religion: 'Christian',
            culture: 'Christian',
            imageUrl: goodFridayImage,
        },
        {
            id: 315,
            name: 'Feast of Our Lady of Madhu',
            location: 'Our Lady of Madhu Shrine, Mannar',
            date: 'August 15th',
            description: 'A significant annual pilgrimage and feast for Roman Catholics in Sri Lanka, held at the sacred shrine of Our Lady of Madhu. Thousands of devotees from across the island gather for prayers, spiritual renewal, and to seek blessings, enduring long journeys.',
            religion: 'Christian (Catholic)',
            culture: 'Catholic, Tamil',
            imageUrl: ourLadyOfMadhuImage ,
        },

        // --- Multi-Religious / Shared Cultural Festivals ---
        {
            id: 316,
            name: 'Sinhala & Tamil New Year (Avurudu)',
            location: 'Island-wide',
            date: 'April 13th/14th',
            description: 'A major cultural festival celebrated by both Sinhala Buddhists and Tamil Hindus, marking the end of the harvest season and the beginning of the new year. Characterized by traditional rituals (e.g., lighting the hearth at auspicious times, anointing oil), special sweet treats, traditional games, and family visits, fostering national unity.',
            religion: 'Multi-religious (Buddhist, Hindu)',
            culture: 'Sinhala, Tamil',
            imageUrl: sinhalaTamilNewYearImage,
        },
        {
            id: 317,
            name: 'Kataragama Festival (Religious Observances)',
            location: 'Kataragama',
            date: 'July/August',
            description: 'While also known for its perahera, the Kataragama festival is profoundly multi-religious. Devotees from Buddhist, Hindu, Muslim, and Vedda communities gather to pay homage to God Kataragama (Skanda-Murugan). Beyond public parades, it involves intense personal devotional acts like fire-walking (for Hindus), spiritual fasting, offering vows, and prayers within the sacred precincts, highlighting shared spiritual devotion and unity.',
            religion: 'Multi-religious (Buddhist, Hindu, Muslim, Vedda)',
            culture: 'Traditional, Shared',
            imageUrl: kataragamaDevotionImage,
        },
    ]);

    // Group festivals by religion for display
    const groupedFestivals = culturalFestivals.reduce((acc, festival) => {
        const religionCategory = festival.religion.includes('Multi-religious') ? 'Multi-Religious / Shared Cultural Festivals' : festival.religion;
        if (!acc[religionCategory]) {
            acc[religionCategory] = [];
        }
        acc[religionCategory].push(festival);
        return acc;
    }, {});

    // Define a preferred order for displaying religious categories
    const religionOrder = [
        'Buddhist',
        'Hindu',
        'Muslim',
        'Christian',
        'Multi-Religious / Shared Cultural Festivals'
    ];

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Religious & Cultural Festivals of Sri Lanka</h1>
            <p className="text-center text-muted mb-5">
                Discover the deep spiritual and cultural significance of Sri Lanka's diverse festivals, celebrated by communities across the island. These observances reflect the rich tapestry of faiths and traditions that coexist harmoniously.
            </p>

            {/* Iterate through religious categories in preferred order */}
            {religionOrder.map(category => (
                groupedFestivals[category] && (
                    <div key={category} className="mb-5"> {/* Add margin bottom for spacing between categories */}
                        <h2 className="text-center mb-4 text-primary">{category} Festivals</h2> {/* Category heading */}
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            {groupedFestivals[category].map(festival => (
                                <div key={festival.id} className="col">
                                    <div className="card h-100 shadow-sm">
                                        <img src={festival.imageUrl} className="card-img-top" alt={festival.name} />
                                        <div className="card-body d-flex flex-column">
                                            <h5 className="card-title">{festival.name}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">{festival.location} - {festival.date}</h6>
                                            <p className="card-text flex-grow-1">{festival.description}</p>
                                            <div className="mb-3">
                                                {festival.religion && <span className="badge bg-primary me-2">{festival.religion}</span>}
                                                {festival.culture && <span className="badge bg-info text-dark">{festival.culture}</span>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            ))}

            {Object.keys(groupedFestivals).length === 0 && ( // Fallback if no festivals are found after grouping
                <div className="col-12 text-center">
                    <p className="lead">No cultural festivals found.</p>
                </div>
            )}
        </div>
    );
}

export default CulturalFestivalPage;