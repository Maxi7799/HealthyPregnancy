const country = `
Australia
New Zealand 
New Caledonia
Papua New Guinea
Solomon Islands
Vanuatu 
Kiribati
Cook Islands
Fiji 
Niue 
Samoa
Tokelau 
Tonga
England 
Northern Ireland
Scotland
Wales
Jersey
Ireland 
Austria 
Belgium 
France
Germany 
Netherlands 
Switzerland 
Denmark 
Finland 
Norway
Sweden
Italy
Malta
Portugal
Spain
Albania 
Bosnia and Herzegovina
Bulgaria
Croatia 
Cyprus
North Macedonia
Greece
Moldova 
Romania 
Slovenia
Montenegro
Serbia
Kosovo
Belarus 
Czechia 
Estonia 
Hungary 
Latvia
Lithuania
Poland
Russian Federation
Slovakia
Ukraine 
Algeria 
Egypt
Libya
Morocco 
Sudan
South Sudan 
Iran 
Iraq 
Israel
Jordan
Kuwait
Lebanon 
Saudi Arabia
Syria
United Arab Emirates 
Myanmar 
Cambodia
Laos 
Thailand
Vietnam 
Brunei Darussalam 
Indonesia
Malaysia
Philippines 
Singapore
Timor-Leste 
China
Hong Kong
Macau
Taiwan
Japan
Korea, Republic of
Bangladesh
Bhutan
India
Nepal
Pakistan
Sri Lanka
Afghanistan 
Armenia 
Kazakhstan
Uzbekistan
Canada
United States of America
Argentina
Bolivia 
Brazil
Chile
Colombia
Ecuador 
Guyana
Peru 
Uruguay 
Venezuela
El Salvador 
Mexico
Nicaragua
Jamaica 
Trinidad and Tobago
Congo,Republic of 
Congo,Democratic Republic o
Ghana
Liberia 
Nigeria 
Sierra Leone
Burundi 
Eritrea 
Ethiopia
Kenya
Mauritius
Mozambique
Seychelles
Somalia 
South Africa
Tanzania
Uganda
Zambia
Zimbabwe`;

const countries = country.split("\n");

const newCountries = countries.map((item) => {
    return item.trim()
})
// console.log(newCountries)
export default newCountries;
