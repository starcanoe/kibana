/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { FirstLastSeenHost, HostItem, HostsData } from '../../graphql/types';
import { FrameworkRequest } from '../framework';

import {
  HostOverviewRequestOptions,
  HostLastFirstSeenRequestOptions,
  HostsAdapter,
  HostsRequestOptions,
} from './types';

export * from './elasticsearch_adapter';
export * from './types';

export class Hosts {
  constructor(private readonly adapter: HostsAdapter) {}

  public async getHosts(req: FrameworkRequest, options: HostsRequestOptions): Promise<HostsData> {
    return this.adapter.getHosts(req, options);
  }

  public async getHostOverview(
    req: FrameworkRequest,
    options: HostOverviewRequestOptions
  ): Promise<HostItem> {
    return this.adapter.getHostOverview(req, options);
  }

  public async getHostFirstLastSeen(
    req: FrameworkRequest,
    options: HostLastFirstSeenRequestOptions
  ): Promise<FirstLastSeenHost> {
    return this.adapter.getHostFirstLastSeen(req, options);
  }
}
