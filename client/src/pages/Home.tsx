import { Button } from "@/components/ui/button";
import { APP_LOGO } from "@/const";

export default function Home() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={APP_LOGO} alt="ぷろらぼ" className="h-10" />
            <span className="text-xl font-bold text-primary">ぷろらぼ研究所</span>
          </div>
          <Button variant="outline" onClick={() => window.open('/mypage', '_blank')}>
            マイページログイン
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="w-20 h-1 bg-accent"></div>
              <h1 className="text-5xl lg:text-6xl font-black text-primary leading-tight">
                ぷろらぼ研究所へ<br />ようこそ
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                学習を「研究」に変えて、<br />
                自分の成長を実感しながら、<br />
                新しい可能性を見つけよう。
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('how-to-join')}>
                  研究員になる
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('about')}>
                  詳しく見る
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img src="/images/A-5・キラキラ金色.png" alt="ぷろらぼキャラクター" className="w-96 max-w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary text-center mb-4">ぷろらぼ研究所とは</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12"></div>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              ぷろらぼ研究所は、学習を「研究活動」として位置づけ、生徒の主体性と自己肯定感を育てる学習支援プログラムです。
            </p>
            <p>
              従来の「勉強」という枠組みを超えて、学びを「研究」として捉えることで、生徒自身が学習の意義を見出し、自ら学ぶ姿勢を育みます。
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary text-center mb-4">研究員になると何ができる？</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12"></div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <img src="/images/A-3・バッジをつけている.png" alt="バッジ" className="w-32 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-primary mb-3">研究員証とバッジ</h3>
              <p className="text-muted-foreground">研究員番号が発行され、IDカードと基本バッジが授与されます。</p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <img src="/images/C-4・タブレットを見ている様子.png" alt="マイページ" className="w-32 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-primary mb-3">専用マイページ</h3>
              <p className="text-muted-foreground">研究活動の記録や成果を可視化できる専用ページが使えます。</p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <img src="/images/D-1・大きいキャラクターが小さいキャラクターをサポート.png" alt="サポート" className="w-32 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-primary mb-3">スタッフのサポート</h3>
              <p className="text-muted-foreground">研究テーマの設定から成果の記録まで、スタッフが丁寧にサポートします。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary text-center mb-4">なぜ学習するのか？</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12"></div>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              「なぜ勉強しなくてはならないのか？」この問いに向き合うことは、学習の本質を理解する第一歩です。
            </p>
            <p>
              ぷろらぼ研究所では、学習を通じて「知る喜び」「できる喜び」「成長する喜び」を実感し、自分自身の可能性を広げることを目指します。
            </p>
          </div>
        </div>
      </section>

      {/* Research Themes Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary text-center mb-4">どんな研究ができるの？</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12"></div>
          
          <div className="space-y-16">
            {/* 5教科 */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-8 text-center">5教科を深く学ぶ</h3>
              <div className="grid md:grid-cols-5 gap-6">
                <div className="bg-white p-6 rounded-lg text-center">
                  <img src="/images/B-7・読書している様子.png" alt="国語" className="w-24 mx-auto mb-4" />
                  <h4 className="font-bold text-primary mb-2">国語</h4>
                  <p className="text-sm text-muted-foreground">読解力・表現力</p>
                </div>
                <div className="bg-white p-6 rounded-lg text-center">
                  <img src="/images/B-1・勉強している様子.png" alt="算数・数学" className="w-24 mx-auto mb-4" />
                  <h4 className="font-bold text-primary mb-2">算数・数学</h4>
                  <p className="text-sm text-muted-foreground">論理的思考力</p>
                </div>
                <div className="bg-white p-6 rounded-lg text-center">
                  <img src="/images/B-3・試験管を持っている様子.png" alt="理科" className="w-24 mx-auto mb-4" />
                  <h4 className="font-bold text-primary mb-2">理科</h4>
                  <p className="text-sm text-muted-foreground">科学的探究心</p>
                </div>
                <div className="bg-white p-6 rounded-lg text-center">
                  <img src="/images/B-7・読書している様子.png" alt="社会" className="w-24 mx-auto mb-4" />
                  <h4 className="font-bold text-primary mb-2">社会</h4>
                  <p className="text-sm text-muted-foreground">社会理解力</p>
                </div>
                <div className="bg-white p-6 rounded-lg text-center">
                  <img src="/images/B-1・勉強している様子.png" alt="英語" className="w-24 mx-auto mb-4" />
                  <h4 className="font-bold text-primary mb-2">英語</h4>
                  <p className="text-sm text-muted-foreground">コミュニケーション力</p>
                </div>
              </div>
            </div>

            {/* IT教育 */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-8 text-center">IT教育（ぷろらぼの強み）</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg text-center">
                  <img src="/images/B-2・PCに向かっている.png" alt="プログラミング" className="w-24 mx-auto mb-4" />
                  <h4 className="font-bold text-primary mb-2">プログラミング</h4>
                  <p className="text-sm text-muted-foreground">論理的思考とコーディング</p>
                </div>
                <div className="bg-white p-6 rounded-lg text-center">
                  <img src="/images/B-2・PCに向かっている.png" alt="動画制作" className="w-24 mx-auto mb-4" />
                  <h4 className="font-bold text-primary mb-2">動画制作</h4>
                  <p className="text-sm text-muted-foreground">映像編集とストーリーテリング</p>
                </div>
                <div className="bg-white p-6 rounded-lg text-center">
                  <img src="/images/B-6・絵を描いている様子.png" alt="デジタルアート" className="w-24 mx-auto mb-4" />
                  <h4 className="font-bold text-primary mb-2">デジタルアート</h4>
                  <p className="text-sm text-muted-foreground">デジタル表現力</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mypage & Badges Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">マイページで成長を可視化</h2>
              <div className="w-20 h-1 bg-accent mb-6"></div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                研究活動の記録や成果を専用マイページで管理できます。学習時間、達成したテーマ、獲得したバッジなど、自分の成長を一目で確認できます。
              </p>
              <img src="/images/C-4・タブレットを見ている様子.png" alt="マイページ" className="w-64 mx-auto" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">バッジを集めよう</h2>
              <div className="w-20 h-1 bg-accent mb-6"></div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                研究活動を通じて様々なバッジを獲得できます。バッジは学習の成果を示す証であり、コレクションする楽しみもあります。
              </p>
              <img src="/images/C-1・バッジを掲げている様子.png" alt="バッジ" className="w-64 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Activity Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary text-center mb-4">活動情報</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12"></div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-accent mb-4">活動時間</h3>
              <p className="text-2xl font-bold text-primary mb-2">毎週2回（水曜日・土曜日）</p>
              <p className="text-muted-foreground">1回あたり30分から1時間程度</p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-bold text-accent mb-4">活動場所</h3>
              <p className="text-2xl font-bold text-primary">ぷろらぼ 2F</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section id="how-to-join" className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary text-center mb-4">研究員になるには</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12"></div>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground mb-12 text-center">
              ぷろらぼ研究所の研究員は希望制です。興味がある方は、以下の流れで登録できます。
            </p>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-lg font-black text-accent mb-2">STEP 1</div>
                <h3 className="text-xl font-bold text-primary mb-2">スタッフに相談</h3>
                <p className="text-muted-foreground">研究員になりたいことをスタッフに伝えてください。</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-lg font-black text-accent mb-2">STEP 2</div>
                <h3 className="text-xl font-bold text-primary mb-2">登録手続き</h3>
                <p className="text-muted-foreground">簡単な登録フォームに記入します。保護者の同意が必要です。</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-lg font-black text-accent mb-2">STEP 3</div>
                <h3 className="text-xl font-bold text-primary mb-2">研究員認定</h3>
                <p className="text-muted-foreground">研究員番号が発行され、IDカードと基本バッジが授与されます。</p>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg mt-8 text-center">
              <p className="text-xl font-bold text-green-600">登録は無料です！</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">研究員への参加をお待ちしています！</h2>
          <p className="text-xl mb-8 opacity-90">学習を「研究」に変えて、新しい可能性を見つけよう。</p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => scrollToSection('how-to-join')}>
              研究員になる
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" onClick={() => window.open('/mypage', '_blank')}>
              マイページを見る
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={APP_LOGO} alt="ぷろらぼ" className="h-10" />
            <span className="text-xl font-bold">ぷろらぼ研究所</span>
          </div>
          <p className="text-gray-400">© 2025 ぷろらぼ研究所. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
