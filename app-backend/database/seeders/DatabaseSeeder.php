<?php

namespace Database\Seeders;

use App\Models\Shop;
use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // negozio 1
        $shop1 = Shop::create([
            'name' => 'J&L Clothing',
            'image_url' => 'https://images.pexels.com/photos/13532891/pexels-photo-13532891.jpeg',
            'address' => 'Viale Veneto 10',
            'phone_number' => '0541778206',
        ]);

        // prodotti negozio 1
        $shop1->products()->createMany([
            [
                'name' => 'T-Shirt',
                'image_url' => 'https://images.pexels.com/photos/32165312/pexels-photo-32165312.jpeg',
                'description' => 'T-Shirt nera. 100% cotone, perfetta per l\'estate',
                'price' => 10.00
            ],
            [
                'name' => 'Jeans',
                'image_url' => 'https://images.pexels.com/photos/18533669/pexels-photo-18533669.jpeg',
                'description' => 'Jeans assortiti, robusti, affidabili',
                'price' => 22.99
            ],
            [
                'name' => 'Mocassino',
                'image_url' => 'https://images.pexels.com/photos/27609337/pexels-photo-27609337.jpeg',
                'description' => 'Mocassini artigianali in vera pelle, fatti in Italia',
                'price' => 299.99
            ]
        ]);

        // negozio 2
        $shop2 = Shop::create([
            'name' => 'Bar Sport',
            'image_url' => 'https://images.pexels.com/photos/12259924/pexels-photo-12259924.jpeg',
            'address' => 'Via Bastioni Settentrionali 15',
            'phone_number' => '0541227788',
        ]);
        // prodotti negozio 2
        $shop2->products()->createMany([
            [
                'name' => 'Cappuccino',
                'image_url' => 'https://images.pexels.com/photos/36851643/pexels-photo-36851643.jpeg',
                'description' => 'Il nostro cappuccino caldo, cremoso, perfetto per iniziare la giornata',
                'price' => 2.50
            ],
            [
                'name' => 'Iced Tea',
                'image_url' => 'https://images.pexels.com/photos/28944484/pexels-photo-28944484.jpeg',
                'description' => 'Il nostro tè freddo fatto in casa, infuso a lungo e ghiacciato. Assolutamente rinfrescante',
                'price' => 3.50
            ],
            [
                'name' => 'Birra',
                'image_url' => 'https://images.pexels.com/photos/34531951/pexels-photo-34531951.jpeg',
                'description' => 'La nostra bionda in bottiglia, leggera, dissetante.',
                'price' => 3.50
            ]
        ]);

        // negozio 3
        $shop3 = Shop::create([
            'name' => 'Il Gambero Rozzo',
            'image_url' => 'https://images.pexels.com/photos/18090414/pexels-photo-18090414.jpeg',
            'address' => 'Via del passero 31',
            'phone_number' => '0541405213',
        ]);

        // prodotti negozio 3
        $shop3->products()->createMany([
            [
                'name' => 'Rigatoni al Pomodoro',
                'image_url' => 'https://images.pexels.com/photos/29039086/pexels-photo-29039086.jpeg',
                'description' => 'Pasta al dente mantecata con sugo di pomodoro fresco e basilico.',
                'price' => 10.00
            ],
            [
                'name' => 'Fritto di Calamari',
                'image_url' => 'https://images.pexels.com/photos/8250284/pexels-photo-8250284.jpeg',
                'description' => 'Anelli di calamari freschi infarinati e fritti alla perfezione, serviti caldi con fetta di limone',
                'price' => 20.00
            ],
            [
                'name' => 'Ostriche',
                'image_url' => 'https://images.pexels.com/photos/37794987/pexels-photo-37794987.jpeg',
                'description' => 'Cruditè di ostriche servite su letto di ghiaccio',
                'price' => 35.50
            ]
        ]);
    }
}
