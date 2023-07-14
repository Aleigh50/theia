// *****************************************************************************
// Copyright (C) 2023 TypeFox and others.
//
// This program and the accompanying materials are made available under the
// terms of the Eclipse Public License v. 2.0 which is available at
// http://www.eclipse.org/legal/epl-2.0.
//
// This Source Code may also be made available under the following Secondary
// Licenses when the conditions for such availability set forth in the Eclipse
// Public License v. 2.0 are satisfied: GNU General Public License, version 2
// with the GNU Classpath Exception which is available at
// https://www.gnu.org/software/classpath/license.html.
//
// SPDX-License-Identifier: EPL-2.0 OR GPL-2.0-only WITH Classpath-exception-2.0
// *****************************************************************************

import { Peer, Permissions, Room } from './collaboration-types';
import { BroadcastType, RequestType } from './protocol';

export const PeerJoined = new BroadcastType<Peer>('peerJoined');
export const PeerLeft = new BroadcastType<Peer>('peerLeft');
export const UpdatePermissions = new BroadcastType<Permissions>('updatePermissions');

export const RoomClosed = new BroadcastType('roomClosed');
export const RoomCreate = new RequestType<Peer, Room>('roomCreate');
export const RoomJoin = new RequestType<Peer, Room>('roomJoin');
