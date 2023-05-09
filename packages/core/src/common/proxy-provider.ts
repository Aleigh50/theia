// *****************************************************************************
// Copyright (C) 2023 Ericsson and others.
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
// SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
// *****************************************************************************

import type { interfaces } from 'inversify';

export type ProxyId<T = unknown> = string | string & interfaces.Abstract<T>;
export function ProxyId<T>(id: string): string & interfaces.Abstract<T> {
    return `theia-proxy-id:${id}` as string & interfaces.Abstract<T>;
}

/**
 * Generic abstraction to get proxies for a given `id`.
 *
 * In practice, specific proxy providers will be bound for different remote
 * target contexts.
 */
export const ProxyProvider = Symbol('ProxyProvider') as symbol & interfaces.Abstract<ProxyProvider>;
export interface ProxyProvider {
    getProxy<T extends object>(id: ProxyId<T>): T
}
