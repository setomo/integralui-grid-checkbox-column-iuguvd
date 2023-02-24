import { Component, enableProdMode, ViewContainerRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { IntegralUIGrid } from '@lidorsystems/integralui-web/bin/integralui/components/integralui.grid';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent  {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
    @ViewChild('grid') grid: IntegralUIGrid;

    public columns: Array<any>;
    public rows: Array<any>;

    public gridStyle: any = {
        general: {
            normal: 'grid-cbxcol-normal'
        }
    }

    public isCustomCheckBoxActive: boolean = false;

    constructor(){
        this.columns = [
            { id: 2, headerText: "Title", width: 180 },
            { id: 1, groupText: "True/False", headerAlignment: 'center', contentAlignment: 'center', width: 50, fixedWidth: true },
            { id: 3, headerText: "Year", headerAlignment: "center", contentAlignment: "center", width: 60 },
            { id: 4, headerText: "Genre", headerAlignment: "center", contentAlignment: "center", width: 50, visible: false },
            { id: 5, headerText: "Ratings", headerAlignment: "center", contentAlignment: "center", width: 75, fixedWidth: true },
            { id: 6, headerText: "Released", allowGrouping: false, headerAlignment: "center", contentAlignment: "center", width: 120 }
        ];

        this.rows = [
            { 
                id: 1,
                text: "Inception",
                cells: [{ cid: 1, value: true }, { cid: 2, text: "Inception" }, { cid: 3, text: "2010" }, { cid: 4, text: "Adventure", icon: "adventure" }, { cid: 5, value: 8.8 }, { cid: 6, text: "16 Jul 2010" } ]
            },
            { 
                id: 2,
                text: "Gravity",
                cells: [{ cid: 1 }, { cid: 2, text: "Gravity" }, { cid: 3, text: "2013" }, { cid: 4, text: "Sci-Fi", icon: "sci-fi" }, { cid: 5, value: 7.9 }, { cid: 6, text: "04 Oct 2013" } ]
            },
            { 
                id: 3,
                text: "Django Unchained",
                cells: [{ cid: 1, value: true }, { cid: 2, text: "Django Unchained" }, { cid: 3, text: "2012" }, { cid: 4, text: "Western", icon: "western" }, { cid: 5, value: 8.5 }, { cid: 6, text: "25 Dec 2012" } ]
            },
            { 
                id: 4,
                text: "Toy Story 3",
                cells: [{ cid: 1, value: true }, { cid: 2, text: "Toy Story 3" }, { cid: 3, text: "2010" }, { cid: 4, text: "Animation", icon: "animation" }, { cid: 5, value: 8.4 }, { cid: 6, text: "18 Jun 2010" } ]
            },
            { 
                id: 5,
                text: "The Wolf of Wall Street",
                cells: [{ cid: 1, value: true }, { cid: 2, text: "The Wolf of Wall Street" }, { cid: 3, text: "2013" }, { cid: 4, text: "Comedy", icon: "comedy" }, { cid: 5, value: 8.2 }, { cid: 6, text: "25 Dec 2013" } ]
            },
            { 
                id: 6,
                text: "The Town",
                cells: [{ cid: 1 }, { cid: 2, text: "The Town" }, { cid: 3, text: "2010" }, { cid: 4, text: "Action", icon: "action" }, { cid: 5, value: 7.6 }, { cid: 6, text: "17 Sep 2010" } ]
            },
            { 
                id: 7,
                text: "Nightcrawler",
                cells: [{ cid: 1, value: true }, { cid: 2, text: "Nightcrawler" }, { cid: 3, text: "2014" }, { cid: 4, text: "Drama", icon: "drama" }, { cid: 5, value: 7.9 }, { cid: 6, text: "31 Oct 2014" } ]
            },
            { 
                id: 8,
                text: "Locke",
                cells: [{ cid: 1 }, { cid: 2, text: "Locke" }, { cid: 3, text: "2014" }, { cid: 4, text: "Drama", icon: "drama" }, { cid: 5, value: 7.1 }, { cid: 6, text: "29 May 2014" } ]
            },
            { 
                id: 9,
                text: "Prometheus",
                cells: [{ cid: 1, value: true }, { cid: 2, text: "Prometheus" }, { cid: 3, text: "2012" }, { cid: 4, text: "Sci-Fi", icon: "sci-fi" }, { cid: 5, value: 7.0 }, { cid: 6, text: "08 Jun 2012" } ]
            },
            { 
                id: 10,
                text: "The Social Network",
                cells: [{ cid: 1, value: true }, { cid: 2, text: "The Social Network" }, { cid: 3, text: "2010" }, { cid: 4, text: "Biography", icon: "biography" }, { cid: 5, value: 7.8 }, { cid: 6, text: "01 Oct 2010" } ]
            },
            { 
                id: 11,
                text: "The Conjuring",
                cells: [{ cid: 1 }, { cid: 2, text: "The Conjuring" }, { cid: 3, text: "2013" }, { cid: 4, text: "Horror", icon: "horror" }, { cid: 5, value: 7.5 }, { cid: 6, text: "19 Jul 2013" } ]
            },
            { 
                id: 12,
                text: "Blue Jasmine",
                cells: [{ cid: 1, value: true }, { cid: 2, text: "Blue Jasmine" }, { cid: 3, text: "2013" }, { cid: 4, text: "Drama", icon: "drama" }, { cid: 5, value: 7.3 }, { cid: 6, text: "23 Aug 2013" } ]
            },
            { 
                id: 13,
                text: "Black Swan",
                cells: [{ cid: 1 }, { cid: 2, text: "Black Swan" }, { cid: 3, text: "2010" }, { cid: 4, text: "Drama", icon: "drama" }, { cid: 5, value: 8.0 }, { cid: 6, text: "17 Dec 2010" } ]
            },
            { 
                id: 14,
                text: "Prisoners",
                cells: [{ cid: 1 }, { cid: 2, text: "Prisoners" }, { cid: 3, text: "2013" }, { cid: 4, text: "Drama", icon: "drama" }, { cid: 5, value: 8.1 }, { cid: 6, text: "20 Sep 2013" } ]
            },
            { 
                id: 15,
                text: "The Avengers",
                cells: [{ cid: 1 }, { cid: 2, text: "The Avengers" }, { cid: 3, text: "2012" }, { cid: 4, text: "Sci-Fi", icon: "sci-fi" }, { cid: 5, value: 8.2 }, { cid: 6, text: "04 May 2012" } ]
            },
            { 
                id: 16,
                text: "Snowpiercer",
                cells: [{ cid: 1 }, { cid: 2, text: "Snowpiercer" }, { cid: 3, text: "2014" }, { cid: 4, text: "Action", icon: "action" }, { cid: 5, value: 7.0 }, { cid: 6, text: "11 Jul 2014" } ]
            },
            { 
                id: 17,
                text: "The Dark Knight Rises",
                cells: [{ cid: 1, value: true }, { cid: 2, text: "The Dark Knight Rises" }, { cid: 3, text: "2012" }, { cid: 4, text: "Action", icon: "action" }, { cid: 5, value: 8.5 }, { cid: 6, text: "20 Jul 2012" } ]
            },
            { 
                id: 18,
                text: "American Hustle",
                cells: [{ cid: 1 }, { cid: 2, text: "American Hustle" }, { cid: 3, text: "2013" }, { cid: 4, text: "Drama", icon: "drama" }, { cid: 5, value: 7.3 }, { cid: 6, text: "20 Dec 2013" } ]
            },
            { 
                id: 19,
                text: "Dawn of the Planet of the Apes",
                cells: [{ cid: 1, value: true }, { cid: 2, text: "Dawn of the Planet of the Apes" }, { cid: 3, text: "2014" }, { cid: 4, text: "Sci-Fi", icon: "sci-fi" }, { cid: 5, value: 7.7 }, { cid: 6, text: "11 Jul 2014" } ]
            },
            { 
                id: 20,
                text: "Frozen",
                cells: [{ cid: 1 }, { cid: 2, text: "Frozen" }, { cid: 3, text: "2013" }, { cid: 4, text: "Animation", icon: "animation" }, { cid: 5, value: 7.7 }, { cid: 6, text: "27 Nov 2013" } ]
            },
            { 
                id: 21,
                text: "Edge of Tomorrow",
                cells: [{ cid: 1, value: true }, { cid: 2, text: "Edge of Tomorrow" }, { cid: 3, text: "2014" }, { cid: 4, text: "Action", icon: "action" }, { cid: 5, value: 7.9 }, { cid: 6, text: "06 Jun 2014" } ]
            },
            { 
                id: 22,
                text: "Interstellar",
                cells: [{ cid: 1 }, { cid: 2, text: "Interstellar" }, { cid: 3, text: "2014" }, { cid: 4, text: "Sci-Fi", icon: "sci-fi" }, { cid: 5, value: 8.7 }, { cid: 6, text: "07 Nov 2014" } ]
            },
            { 
                id: 23,
                text: "Rush",
                cells: [{ cid: 1 }, { cid: 2, text: "Rush" }, { cid: 3, text: "2013" }, { cid: 4, text: "Action", icon: "action" }, { cid: 5, value: 8.2 }, { cid: 6, text: "27 Sep 2013" } ]
            },
            { 
                id: 24,
                text: "Shutter Island",
                cells: [{ cid: 1, value: true }, { cid: 2, text: "Shutter Island" }, { cid: 3, text: "2010" }, { cid: 4, text: "Mystery", icon: "mystery" }, { cid: 5, value: 8.1 }, { cid: 6, text: "19 Feb 2010" } ]
            },
            { 
                id: 25,
                text: "This Is the End",
                cells: [{ cid: 1 }, { cid: 2, text: "This Is the End" }, { cid: 3, text: "2013" }, { cid: 4, text: "Comedy", icon: "comedy" }, { cid: 5, value: 5.7 }, { cid: 6, text: "12 Jun 2013" } ]
            },
            { 
                id: 26,
                text: "Titanic",
                cells: [{ cid: 1 }, { cid: 2, text: "Titanic" }, { cid: 3, text: "1997" }, { cid: 4, text: "Romance", icon: "romance" }, { cid: 5, value: 7.8 }, { cid: 6, text: "19 Dec 1997" } ]
            },
            { 
                id: 27,
                text: "The Martian",
                cells: [{ cid: 1 }, { cid: 2, text: "The Martian" }, { cid: 3, text: "2015" }, { cid: 4, text: "Adventure", icon: "adventure" }, { cid: 5, value: 8.0 }, { cid: 6, text: "02 Oct 2015" } ]
            }
        ];
    }

    ngAfterViewInit(){
    }

    // CheckBox Cell ---------------------------------------------------------------------

    public checkBoxClicked(cell: any){
        if (cell){
            let currentValue = cell.value == true ? true : false;
            cell.value = !currentValue;
        }
    }

    public columnCheckClicked(column: any){
        if (column){
            let currentValue = column.value == true ? true : false;
            column.value = !currentValue;

            let list = this.grid.getList();
            for (let i = 0; i < list.length; i++){
                let cell = this.grid.getCellByColumnId(list[i].cells, 1);
                if (cell)
                    cell.value = column.value;
            }
        }
    }

    onCheckChange(e: any){
        this.grid.updateLayout();
    }
}
