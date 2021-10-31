import { Component, OnInit, ViewChild } from "@angular/core";
import { NavigationService } from "../../../services/navigation.service";
import { SearchService } from "src/app/shared/services/search.service";
import { SharedAnimations } from "src/app/shared/animations/shared-animations";
import {
  Router,
  RouteConfigLoadStart,
  ResolveStart,
  RouteConfigLoadEnd,
  ResolveEnd,
  NavigationEnd,
} from "@angular/router";
import { PerfectScrollbarDirective } from "ngx-perfect-scrollbar";

@Component({
  selector: "app-admin-layout-sidebar-large",
  templateUrl: "./admin-layout-sidebar-large.component.html",
  styleUrls: ["./admin-layout-sidebar-large.component.scss"],
})
export class AdminLayoutSidebarLargeComponent implements OnInit {
  moduleLoading: boolean;
  url: string;
  @ViewChild(PerfectScrollbarDirective, { static: true })
  perfectScrollbar: PerfectScrollbarDirective;
  show: boolean = true;

  constructor(
    public navService: NavigationService,
    public searchService: SearchService,
    private router: Router
  ) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (
        event instanceof RouteConfigLoadStart ||
        event instanceof ResolveStart
      ) {
        this.moduleLoading = true;
      }
      if (event instanceof RouteConfigLoadEnd || event instanceof ResolveEnd) {
        this.moduleLoading = false;
      }
    });
    this.url = this.router.url;
    if (this.url === "/app/pos" ||this.url === "/auth/login"||this.url === "/auth/register") {
      this.show = false;
    } else {
      this.show = true;
    }
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === "/app/pos"||event.url === "/auth/login" ||this.url === "/auth/register") {
          this.show = false;
        } else {
          this.show = true;
        }
      }
    });
  }
}
