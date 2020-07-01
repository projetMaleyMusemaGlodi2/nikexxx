import { Injectable } from '@angular/core';
import { InjectableRxStompConfig, RxStompService } from '@stomp/ng2-stompjs';
import {WebSocketOptions} from '../model/websocket.options';
import { WebSocketService } from './web-socket-service.service';
import { Constants } from './constant/constants';


export const progressStompConfig: InjectableRxStompConfig = {
  webSocketFactory: () => {
    return new WebSocket('ws://localhost:8080/stomp');
  }
};

@Injectable()
export class ProgressWebsocketService extends WebSocketService {
  constructor(stompService: RxStompService) {
    super(
      stompService,
      progressStompConfig,
      new WebSocketOptions('/topic/progress')
    );
  }
}
