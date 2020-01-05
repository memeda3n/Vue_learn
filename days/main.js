let app = new Vue({
    el: '#app',
    data: {
        books: [{
                'name': 'qqq1',
                'date': '2019-01-01',
                'price': 200.00,
                'count': 1
            },
            {
                'name': 'qqq2',
                'date': '2019-01-01',
                'price': 200.00,
                'count': 1
            },
            {
                'name': 'qqq3',
                'date': '2019-01-01',
                'price': 200.00,
                'count': 1
            },
            {
                'name': 'qqq4',
                'date': '2019-01-01',
                'price': 200.00,
                'count': 1
            }
        ]
    },
    methods: {
        increase(item) {
            item.count++;
            console.log("dfdsf");
        },
        decrease(item) {
            console.log("dfdsf");
            if (item.count > 1) {
                item.count--;
            }

        },
        remove(index) {


            this.books.splice(index, 1);
        }
    },
    computed: {
        summary() {
            let count = 0;
            console.log("dfdfd");
            let b = this.books;
            for (let i = 0; i < b.length; i++) {
                count += b[i].price * b[i].count;
            }
            return count;
        }
    }


});