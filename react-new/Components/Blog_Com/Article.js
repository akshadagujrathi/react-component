const articles = [
    {
      id:1,
      name: 'about',
      title: 'Your most unhappy customers are your greatest source of learning.',
      date: '22 april 2022',
      desc: 'about cute blog for react js',
      author: 'axcora',
      authorlink: 'https://website.axcora.com',
      img: 'https://preview.colorlib.com/theme/magdesign/images/img_2.jpg',
      content: [
        `Cuteblog for react is designed specially for react js, so with this source code project or free template themes for react make you fast and easy to build modern blogging website using react js and cuteblog.`,
        `Super fast and of course we have injection with auto generated SEO for this project, yes.. we use helmet !!`,
        `With this concept so you can just focusing on your content article .`,
        `Cuteblog react adalah sebuah tema dan template yang khusus diperuntukan untuk library react js, dan dengan tema ini tentunya harapan kami selaku pengembang memudahkan mu untuk membuat webiste dan blog dengan cepat. `,
        `Persembahan dari axcora technology untuk dunia agar dapat membuat sebuah website dan blog modern berbasis react dengan konsep blog.`,
      ],
      category:"Perfect Planning",
      comments: [
        { id: 1, author: 'Alice', text: 'Great post!' },
        { id: 2, author: 'Bob', text: 'I learned a lot.' },
      ],
      images: ['url_to_image_1_1.jpg', 'url_to_image_1_2.jpg'],
      profileImage: 'https://avadh-react.wpolive.com/static/media/about-widget.4b9787c75905aeedc28f.jpg',
      tags: ['Install', 'Frontend']
    },
    
    {
      id:2,
      name: 'gatsby-js',
      title: 'Gatsby JS',
      desc: 'Cuteblog for Gatsby with react JS',
      date: '20 april 2022',
      author: 'axcora',
      authorlink: 'https://website.axcora.com',
      img: 'https://preview.colorlib.com/theme/magdesign/images/img_3.jpg',
      content: [
        `If you love gatsby js so stay tuned.. next we develope cuteblog to using gatsby js, of course same concept and design with cuteblog.`,
        `Dan ya bagi kamu pencinta gatsby js maka tunggu project kami selanjutnya untuk cuteblog themes template menggunakan gatsby, dan pastinya gratis untuk kamu unduh full source code free download.`,
      ],
      category:"Professional Design",
      comments: [
        { id: 1, author: 'Alice', text: 'Great post!' },
        { id: 2, author: 'Bob', text: 'I learned a lot.' },
      ],
      profileImage: 'https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=826&t=st=1708950621~exp=1708951221~hmac=3cdea52148b7bb1f8403515930ed2fff7cfeeb25c1a0460102a43b131f31374a',
      images: ['url_to_image_1_1.jpg', 'url_to_image_1_2.jpg'],
      tags:['Work', 'Deploy']
    },
    {
      id:3,
      name: 'installation',
      title: 'Install',
      date: '20 april 2022',
      author: 'axcora',
      authorlink: 'https://website.axcora.com',
      img: 'https://preview.colorlib.com/theme/magdesign/images/img_4.jpg',
      desc: 'How to install cuteblog react ',
      content: [
        `Oke now how to install this cuteblog  project ?? for first make sure you have installing node on your devices, or you can download and install node first, after this we need to download source code project and code editor too... so for code editor you can download visual code studio and install on your device.`,
        `Oke after installation you need to download cuteblog react source code on or github repo, just github icon click button on navbar. or you can using git bash with run git clone https://github.com/mesinkasir/cuteblogreact.git `,
        `Now extract all source code project and you need to install with run npm install && npm start , then open localhost:3000 , congratulation now you have success installing cuteblog for react on your devices. `,
      ],
      category:"Best Interior",
      comments: [
        { id: 1, author: 'Alice', text: 'Great post!' },
        { id: 2, author: 'Bob', text: 'I learned a lot.' },
      ],
      profileImage: 'https://img.freepik.com/free-psd/expressive-woman-gesturing_23-2150198673.jpg?w=1380&t=st=1708950637~exp=1708951237~hmac=3fbda276cc0f22609d25fe5b200867bd0363ee959ae6f7789fc5a3f1101c5478',
      images: ['url_to_image_1_1.jpg', 'url_to_image_1_2.jpg'],
      tags:['Cuteblog CMS', 'Deploy','Work']
    },
    
    {
      id:4,
      name: 'work',
      title: 'Work',
      date: '20 april 2022',
      author: 'axcora',
      authorlink: 'https://website.axcora.com',
      img: 'https://preview.colorlib.com/theme/magdesign/images/img_5.jpg',
      desc: 'How to work with cuteblog react',
      content: [
        `Oke after you have successfully installed and run on your devices, now you can open source code project using visual code studio, then you can open on src folder , and select ArticleContent.js files - open and edit this files then change with you needed, just follow stucture files for create new article content, and save it for update data.`,
        `For SEO you can visit on index.js file and change title description and other on helmet .`,
      ],
      category:"Modern Furniture",
      comments: [
        { id: 1, author: 'Alice', text: 'Great post!' },
        { id: 2, author: 'Bob', text: 'I learned a lot.' },
      ],
      profileImage: 'https://img.freepik.com/free-photo/close-up-portrait-smiling-young-woman-looking-camera_171337-17994.jpg?w=1380&t=st=1708951078~exp=1708951678~hmac=094206ed123e9b5ae91440e3b1119eb51723947908d8e0fa44bcfe016d28f83e',
      images: ['url_to_image_1_1.jpg', 'url_to_image_1_2.jpg'],
    },
    {
      id:5,
      name: 'deploy',
      title: 'Deploy',
      date: '19 april 2022',
      author: 'axcora',
      authorlink: 'https://website.axcora.com',
      img: 'https://preview.colorlib.com/theme/magdesign/images/img_6.jpg',
      desc: 'How to deploy on static hosting or shared cloud hosting',
      content: [
        `Oke after change and finishin your project , now you need to cloud your source code right, this is for online your website and blog, so for first you can use two option using firebase and surge or use netlify , vercel, heroku etc.`,
        `For using firebase and surge for first you need to build to production mode, so you can input this command on shell terminal npm run build - then you can deploy on public folder to firebase or surge .`,
        `Option two you can use github intergation with heroku,vercel,netlify - just create account and create new repo and push your source code to your repo project, and you need to integration with netlify ,heroku or vercel, just create new project then select your github repo and deploy it. `,
      ],
      category:"Professional Design",
      comments: [
        { id: 1, author: 'Alice', text: 'Great post!' },
        { id: 2, author: 'Bob', text: 'I learned a lot.' },
      ],
      profileImage: 'https://avadh-react.wpolive.com/static/media/about-widget.4b9787c75905aeedc28f.jpg',
      images: ['url_to_image_1_1.jpg', 'url_to_image_1_2.jpg'],
    },
    {
      id:6,
      name: 'alternative',
      title: 'Alternative',
      date: '18 april 2022',
      author: 'axcora',
      authorlink: 'https://website.axcora.com',
      img: 'https://preview.colorlib.com/theme/magdesign/images/img_7.jpg',
      desc: 'Use static site generator with cuteblog',
      content: [
        `If you need to build and develope cuteblog project with static site generator , of course you can do it... we have develope cuteblog for jekyll, eleventy 11ty and astro, just visit on our github repo and search cuteblog with generator static site download it then run and deploy on hosting.`,
        `You can visit on our blog for download all source code project, just visit on https://www.hockeycomputindo.com/2010/12/blog-post.html`,
        `Cuteblog for jekyll`,
        `https://www.hockeycomputindo.com/2022/04/auto-seo-dengan-cuteblog-for-jekyll.html`,
        `Cuteblog for eleventy`,
        `https://www.hockeycomputindo.com/2022/04/cuteblog-11ty-for-eleventy-generator.html`,
        `Cuteblog for astro`,
        `https://www.hockeycomputindo.com/2022/04/cute-blog-astro-generator-static-site.html`,
        `Cuteblog for pico cms`,
        `https://www.hockeycomputindo.com/2022/04/tema-blog-website-terbaru-dan-gratis.html`,
      ],
      category:"Perfect Planning",
      comments: [
        { id: 3, author: 'Charlie', text: 'Nice explanation!' },
        { id: 4, author: 'David', text: 'Looking forward to more content.' },
      ],
      profileImage: 'https://img.freepik.com/free-photo/man-smiling-with-hands-hips_1187-3017.jpg?w=740&t=st=1708950670~exp=1708951270~hmac=e045675ee1dddf8f5ea67594353e665b0640d3a335b3bd02fd0b1f2ba7c3ea6a',
      images: ['url_to_image_1_1.jpg', 'url_to_image_1_2.jpg'],
    },
    {
      id:7,
      name: 'cms',
      title: 'Cuteblog CMS',
      date: '18 april 2022',
      author: 'axcora',
      authorlink: 'https://website.axcora.com',
      img: 'https://preview.colorlib.com/theme/magdesign/images/post_lg_4.jpg',
      desc: 'If you need build cuteblog with backend admin area so use cuteblog webapp',
      content: [
        `And if you need to work with admin area of course you can do it, yeah.. we have develope cuteblog for content management system to.. so with this cms you can easy for install and deploy or run on your shared cloud hosting, yes.. we have develope using php lang, so you can easy for deploy on your cloud shared hosting.`,
        `Cuteblog pico cms, yes.. we have develope using pico cms, so why use pico ?? of course with pico is very secure and fast , this way why we chose pico, just download and upload it on your hosting then your webiste is live, and you can work with admin area too.. so if you need work using pico cms so download now just visit this link https://axcora.my.id/pico/cuteblog .`,
        `Cuteblog for Get axcora cms - on progress development... yes this is our cms project from get simple, so you can easy download it and upload on hosting, then you can work with admin area and text editor is include , no need database installation, so you can download cuteblog for get axcora on https://axcora.com/getaxcoracms`,
      ],
      category:"Perfect Planning",
      comments: [
        { id: 3, author: 'Charlie', text: 'Nice explanation!' },
        { id: 4, author: 'David', text: 'Looking forward to more content.' },
      ],
      profileImage: 'https://img.freepik.com/premium-photo/consultant-portrait-woman-with-glasses-office-manager-student-smiling-isolated-white-backgroundp_283470-8461.jpg?w=826',
      images: ['url_to_image_1_1.jpg', 'url_to_image_1_2.jpg'],
    },
    {
      id:8,
      name: 'cloud',
      title: 'Cloud with Us',
      date: '16 april 2022',
      author: 'axcora',
      authorlink: 'https://website.axcora.com',
      img: 'https://plus.unsplash.com/premium_photo-1676009619407-18a5121f9687?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      desc: 'Create and build your modern website with us for best solutions',
      content: [
        `If you need to build and develop modern website using modern technology like static site generator with jekyll, eleventy 11ty , astro or user react, svelte kit, angular so you can use our services with cheap price`,
        `Or you need to create web app where website integration with your point of sale application so we can do it , with multiple technology let's get started build your website application including android app.`,
        `Contact Us`,
        `Whatsapp : +6285646104747`,
        `Call Us : +62895339403223`,
        `Email : axcora@gmail.com`,
      ],
      category:"Modern Furniture",
      comments: [
        { id: 3, author: 'Charlie', text: 'Nice explanation!' },
        { id: 4, author: 'David', text: 'Looking forward to more content.' },
      ],
      profileImage: 'https://img.freepik.com/premium-photo/handsome-man-portrait_53419-1273.jpg?w=1380',
      images: ['https://avadh-react.wpolive.com/static/media/img-1.b737a0dd55dfdb2e7c2d.jpg', 'https://avadh-react.wpolive.com/static/media/img-2.551f0aefb7a3f119aa44.jpg'],
    },
  ];
  
  export default articles;